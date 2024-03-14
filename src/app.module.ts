import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoController } from './user_information/info/info.controller';
import { AuthModule } from './auth/auth.module';
import { InfoModule } from './user_information/info/info.module';
import { EnsembleModule } from './ensemble/ensemble.module';
import { EnsembleController } from './ensemble/ensemble.controller';
import { PostBulletinController } from './postBulletin/postBulletin.controller';
import { PostBulletinModule } from './postBulletin/postBulletin.module';
//import { FacebookStrategy } from './auth/facebook.strategy';

@Module({
  //where we add everything we use so it knows what the app should consist of
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kvalifik:kvalifik123@cluster0.k4nq9qb.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    InfoModule,
    EnsembleModule,
    PostBulletinModule,
  ],
  controllers: [
    AppController,
    InfoController,
    EnsembleController,
    PostBulletinController,
  ],
  providers: [AppService], //, FacebookStrategy
})
export class AppModule {}
