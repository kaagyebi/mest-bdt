import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema({ collection: 'Profile', timestamps: true })
export class Profile {
  @Prop({ required: true, unique: true })
  email: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
