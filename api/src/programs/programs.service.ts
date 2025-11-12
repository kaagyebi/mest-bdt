import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Program, ProgramDocument } from './schemas/program.schema';
import { Model } from 'mongoose';


@Injectable()
export class ProgramsService {
constructor(
  @InjectModel(Program.name) private programModel: Model<ProgramDocument>) {} 

  async create (name: string, description: string): Promise<Program>{
    const newProgram = new this.programModel({name,description});
    return newProgram.save();
  }

  async findAll() : Promise<Program[]> {
    return this.programModel.find().exec();
  }

  async findOne(id: string): Promise<Program | null> {
    return this.programModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<Program>): Promise<Program | null> {
    return this.programModel
    .findByIdAndUpdate(id, updateData, { new:true})
    .exec();
  }

  async remove(id: string): Promise<Program | null> {
    return this.programModel.findByIdAndDelete(id).exec();
  }
}
