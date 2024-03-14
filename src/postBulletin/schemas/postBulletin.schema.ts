import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type PostDocument = PostBulletin & Document;

@Schema()
export class PostBulletin {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  instrument: string;
  @Prop({ required: true })
  minimumLevel: number;
  @Prop({ required: true })
  genre: string;
}

export const PostBulletinSchema = SchemaFactory.createForClass(PostBulletin);
