import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './schemas/program.schema';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Post()
  async create(@Body() body:{name:string; description: string}): Promise<Program> {
    const {name, description} = body;
    return this.programsService.create(name, description);
  }

  @Get()
  async findAll(): Promise<Program[]> {
    return this.programsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Program | null> {
    return this.programsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateProgramDto:UpdateProgramDto) {
    return this.programsService.update(id, UpdateProgramDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Program | null> {
    return this.programsService.remove(id);
  }
}
