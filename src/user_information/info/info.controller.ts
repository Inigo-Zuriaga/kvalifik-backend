import {
  Controller,
  Get, //read
  Post, //create
  Put,//update
  Delete,//delete
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create.user.dto';
import { InfoDetails } from '../interfaces/info.interface';
import { InfoDocument } from '../schemas/info.schema';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}
  
  @Get()
  findAll(): Promise<InfoDetails[]> { //what i promise that it will send
    return this.infoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<InfoDetails> {
    return this.infoService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<InfoDetails> {
    return this.infoService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateUserDto: CreateUserDto,
    @Param('id') id,
  ): Promise<InfoDetails> {
    return this.infoService.update(id, updateUserDto);
  }
}
