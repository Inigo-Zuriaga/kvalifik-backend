import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnsembleController } from './ensemble.controller';
import { EnsembleService } from './ensemble.service';
import { EnsembleSchema } from './schemas/ensemble.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ensemble', schema: EnsembleSchema }]),
  ],
  controllers: [EnsembleController],
  providers: [EnsembleService],
  exports: [EnsembleService],
})
export class EnsembleModule {}
