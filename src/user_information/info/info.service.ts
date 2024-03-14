import { Injectable } from '@nestjs/common';
import { InfoDetails } from '../interfaces/info.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InfoDocument } from '../schemas/info.schema';
import { Info } from '../schemas/info.schema';

@Injectable()
export class InfoService {
  constructor(
    @InjectModel('Info') private readonly infoModel: Model<InfoDocument>,
  ) {}

  async findAll(): Promise<InfoDocument[]> {
    return await this.infoModel.find();
  }

  async findOne(id: string): Promise<InfoDocument> {
    return await this.infoModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<InfoDocument> {
    return await this.infoModel.findByIdAndRemove(id);
  }

  async create(
    name: string,
    surname: string,
    // picture: string,
    description: string,
    location: string,
    instrument: string,
    genre: string,
    experience: string,
    // phone: string,
    email: string,
    hashedPassword: string,
    // status: string,
  ): Promise<InfoDocument> {
    const newInfo = new this.infoModel({
      name,
      surname,
      // picture,
      description,
      location,
      instrument,
      genre,
      experience,
      // phone,
      email,
      password: hashedPassword,
      // status,
    });
    return await newInfo.save();
  }

  async update(id: string, info: Info): Promise<InfoDocument> {
    return await this.infoModel.findByIdAndUpdate(id, info, { new: true });
  }

  getUserDetails(user: InfoDocument): InfoDetails {
    return {
      id: user._id,
      name: user.name,
      surname: user.surname,
      // picture: user.picture,
      description: user.description,
      location: user.location,
      instrument: user.instrument,
      genre: user.genre,
      experience: user.experience,
      // phone: user.phone,
      email: user.email,
      // status: user.status,
    };
  }

  async findByEmail(email: string): Promise<InfoDocument | null> {
    return this.infoModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<InfoDetails | null> {
    const user = await this.infoModel.findById(id).exec();
    if (!user) return null;
    return this.getUserDetails(user);
  }
}

// everything related to user document modul, user stuff, creating new user, getting the details, find them,...all the services and fuctions we want to add to the app
