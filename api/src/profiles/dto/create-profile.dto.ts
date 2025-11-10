import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateProfileDto {
  @IsEmail()
  @ApiProperty()
  email: string;
}
