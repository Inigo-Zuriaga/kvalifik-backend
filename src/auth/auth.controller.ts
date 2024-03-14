import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user_information/dto/create.user.dto';
import { ExistingUserDto } from 'src/user_information/dto/existing-user.dto';
import { InfoDetails } from 'src/user_information/interfaces/info.interface';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() user: CreateUserDto): Promise<InfoDetails | null> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() user: ExistingUserDto): Promise<{ token: string } | null> {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProfile(@Request() req): string {
    return req.user;
  }
}
