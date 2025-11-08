import { Injectable } from '@nestjs/common';
import { AnyKeys, UpdateQuery } from 'mongoose';
import { Program } from './schemas/program.schema';

@Injectable()
export class ProgramsService {
  create(doc: AnyKeys<Program>) {
    console.log(doc);
    return 'This action adds a new program';
  }

  findAll() {
    return `This action returns all programs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} program`;
  }

  update(id: number, update: UpdateQuery<Program>) {
    console.log(update);
    return `This action updates a #${id} program`;
  }

  remove(id: number) {
    return `This action removes a #${id} program`;
  }
}
