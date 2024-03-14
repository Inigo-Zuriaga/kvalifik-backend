import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateEnsembleDto } from './dto/create-ensemble.dto';
import { EnsembleService } from './ensemble.service';
import { Ensemble } from './interfaces/ensemble.interface';
import { EnsembleDocument } from './schemas/ensemble.schema';

@Controller('ensemble')
export class EnsembleController {
  constructor(private readonly ensembleService: EnsembleService) {}

  @Get()
  findAll(): Promise<Ensemble[]> {
    return this.ensembleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Ensemble> {
    return this.ensembleService.findOne(id);
  }

  @Post()
  create(@Body() createEnsembleDto: CreateEnsembleDto): Promise<Ensemble> {
    return this.ensembleService.create(createEnsembleDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Ensemble> {
    return this.ensembleService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateEnsembleDto: CreateEnsembleDto,
    @Param('id') id,
  ): Promise<Ensemble> {
    return this.ensembleService.update(id, updateEnsembleDto);
  }
}
