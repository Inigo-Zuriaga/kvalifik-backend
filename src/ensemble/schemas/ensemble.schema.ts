import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type EnsembleDocument = Ensemble & Document;

@Schema()
export class Ensemble {
  @Prop()
  ensembleName: string;
  @Prop()
  description: string;
  @Prop()
  postNumber: number;
  @Prop()
  city: string;
  @Prop()
  musicians: string;
  @Prop()
  frequency: string;
  @Prop()
  genres: string;
}

export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);
