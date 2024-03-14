import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //built in nestfactory - cuz we might be creating requests from react - we dont want to have cors issues with react
  await app.listen(3000);
}
bootstrap();
