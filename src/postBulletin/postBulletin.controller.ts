import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostBulletinDto } from './dto/create-postBulletin.dto';
import { PostBulletinService } from './postBulletin.service';
import { PostBulletin } from './interfaces/postBulletin.interface';

@Controller('postBulletin')
export class PostBulletinController {
  constructor(private readonly postBulletinService: PostBulletinService) {}

  @Get()
  findAll(): Promise<PostBulletin[]> {
    return this.postBulletinService.findAll();
  }

  @Get(':id')
  fineOne(@Param('id') id): Promise<PostBulletin> {
    return this.postBulletinService.findOne(id);
  }

  @Post()
  create(
    @Body() createPostBulletinDto: CreatePostBulletinDto,
  ): Promise<PostBulletin> {
    return this.postBulletinService.create(createPostBulletinDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<PostBulletin> {
    return this.postBulletinService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updatePostBulletinDto: CreatePostBulletinDto,
    @Param('id') id,
  ): Promise<PostBulletin> {
    return this.postBulletinService.update(id, updatePostBulletinDto);
  }
}
