import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { InfoModule } from 'src/user_information/info/info.module';
import { AuthService } from './auth.service';
//import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    InfoModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'SECRET', //additional security
        signOptions: { expiresIn: '3600s' }, //za ako dlho ti vyprsi token
      }),
    }),
  ],
  providers: [AuthService, JwtAuthGuard], //, JwtStrategy
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
