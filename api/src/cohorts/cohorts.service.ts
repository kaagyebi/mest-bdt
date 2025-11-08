import { Injectable } from '@nestjs/common';
import { AnyKeys, UpdateQuery } from 'mongoose';
import { Cohort } from './schemas/cohort.schema';

@Injectable()
export class CohortsService {
  create(doc: AnyKeys<Cohort>) {
    console.log(doc);
    return 'This action adds a new cohort';
  }

  findAll() {
    return `This action returns all cohorts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cohort`;
  }

  update(id: number, update: UpdateQuery<Cohort>) {
    console.log(update);
    return `This action updates a #${id} cohort`;
  }

  remove(id: number) {
    return `This action removes a #${id} cohort`;
  }
}
