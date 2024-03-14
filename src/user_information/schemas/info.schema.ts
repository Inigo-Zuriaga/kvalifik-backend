//schema is for using on the mongo

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type InfoDocument = Info & Document;

@Schema()
export class Info {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  surname: string;
  // @Prop({ required: true })
  // picture: string;
  @Prop({ required: false })
  description: string;
  @Prop({ required: true })
  location: string;
  @Prop({ required: true })
  instrument: string;
  @Prop({ required: true })
  genre: string;
  @Prop({ required: true })
  experience: string;
  // @Prop({ required: false })
  // phone: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  // @Prop({ required: true })
  // status: string;
}

export const InfoSchema = SchemaFactory.createForClass(Info);

/*export const InfoSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});*/
