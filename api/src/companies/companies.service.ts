import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AnyKeys, Model, QueryFilter, UpdateQuery } from 'mongoose';
import { Company } from './schemas/company.schema';
import { Response } from '../responses/schemas/response.schema';
import { User } from '../users/schemas/user.schema';

// 24-char hex string — the canonical Mongo ObjectId wire format. A malformed
// id short-circuits to a 404 instead of triggering a Mongoose CastError 500.
const OBJECT_ID_HEX_REGEX = /^[0-9a-fA-F]{24}$/;

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
    @InjectModel(Response.name) private responseModel: Model<Response>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  create(doc: AnyKeys<Company>) {
    return this.companyModel.insertOne(doc);
  }

  countDocuments(filter: QueryFilter<Company>) {
    return this.companyModel.countDocuments(filter);
  }

  findAll(filter: QueryFilter<Company>) {
    return this.companyModel.find(filter);
  }

  findOne(filter: QueryFilter<Company>) {
    return this.companyModel.findOne(filter);
  }

  /**
   * List every Response belonging to a Company. Admin/dashboard read — not
   * tenant-scoped, so it can surface any company's submissions by id.
   *
   * A malformed id or an unknown company both surface as a 404 so the route
   * never returns a 500 on bad input and the caller can distinguish "no such
   * company" from "company has no responses" (the latter returns `[]`).
   */
  async findResponsesByCompany(companyId: string) {
    if (!OBJECT_ID_HEX_REGEX.test(companyId)) {
      throw new NotFoundException('Company not found.');
    }

    const company = await this.companyModel.findById(companyId);
    if (!company) {
      throw new NotFoundException('Company not found.');
    }

    // `Response.company` is typed as the populated Company, so the string id
    // is cast to satisfy the query filter — same convention as `deleteOne`.
    return this.responseModel.find({ company: companyId as any });
  }

  updateOne(filter: QueryFilter<Company>, update: UpdateQuery<Company>) {
    return this.companyModel.updateOne(filter, update);
  }

  async deleteOne(filter: QueryFilter<Company>) {
    const company = await this.companyModel.findOne(filter);
    if (company) {
      const responseCount = await this.responseModel.countDocuments({
        company: company._id as any,
      });
      if (responseCount > 0) {
        throw new ConflictException(
          'Cannot delete company with existing responses. Remove all responses first.',
        );
      }

      const userCount = await this.userModel.countDocuments({
        company: company._id as any,
      });
      if (userCount > 0) {
        throw new ConflictException(
          'Cannot delete company with existing users. Remove all users first.',
        );
      }
    }
    return this.companyModel.deleteOne(filter);
  }
}
