import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostBulletinController } from './postBulletin.controller';
import { PostBulletinService } from './postBulletin.service';
import { PostBulletinSchema } from './schemas/postBulletin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PostBulletin', schema: PostBulletinSchema },
    ]),
  ],
  controllers: [PostBulletinController],
  providers: [PostBulletinService],
  exports: [PostBulletinService],
})
export class PostBulletinModule {}
