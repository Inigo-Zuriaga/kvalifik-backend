import { Injectable } from '@nestjs/common';
import { PostBulletin } from './interfaces/postBulletin.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostBulletinService {
  constructor(
    @InjectModel('PostBulletin')
    private readonly postBulletinModel: Model<PostBulletin>,
  ) {}

  async findAll(): Promise<PostBulletin[]> {
    return await this.postBulletinModel.find();
  }

  async findOne(id: string): Promise<PostBulletin> {
    return await this.postBulletinModel.findOne({ _id: id });
  }

  async create(postBulletin: PostBulletin): Promise<PostBulletin> {
    const newPostBulletin = new this.postBulletinModel(postBulletin);
    return await newPostBulletin.save();
  }

  async delete(id: string): Promise<PostBulletin> {
    return await this.postBulletinModel.findByIdAndRemove(id);
  }

  async update(id: string, postBulletin: PostBulletin): Promise<PostBulletin> {
    return await this.postBulletinModel.findByIdAndUpdate(id, postBulletin, {
      new: true,
    });
  }
}
