import { Injectable } from '@nestjs/common';
import { Ensemble } from './interfaces/ensemble.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EnsembleService {
  constructor(
    @InjectModel('Ensemble') private readonly ensembleModel: Model<Ensemble>,
  ) {}

  async findAll(): Promise<Ensemble[]> {
    return await this.ensembleModel.find();
  }

  async findOne(id: string): Promise<Ensemble> {
    return await this.ensembleModel.findOne({ _id: id });
  }

  async create(ensemble: Ensemble): Promise<Ensemble> {
    const newEnsemble = new this.ensembleModel(ensemble);
    return await newEnsemble.save();
  }

  async delete(id: string): Promise<Ensemble> {
    return await this.ensembleModel.findByIdAndRemove(id);
  }

  async update(id: string, ensemble: Ensemble): Promise<Ensemble> {
    return await this.ensembleModel.findByIdAndUpdate(id, ensemble, {
      new: true,
    });
  }
}
