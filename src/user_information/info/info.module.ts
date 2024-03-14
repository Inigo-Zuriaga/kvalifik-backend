import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InfoSchema } from '../schemas/info.schema';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Info', schema: InfoSchema }])],
  controllers: [InfoController],
  providers: [InfoService],
  exports: [InfoService],
})
export class InfoModule {}
