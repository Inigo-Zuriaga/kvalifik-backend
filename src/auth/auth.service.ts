import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InfoService } from 'src/user_information/info/info.service';
import { CreateUserDto } from 'src/user_information/dto/create.user.dto';
import { InfoDetails } from 'src/user_information/interfaces/info.interface';
import { ExistingUserDto } from 'src/user_information/dto/existing-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private infoService: InfoService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12); //12 is the saltground - optimized number - how many times it encryoties the password
  }

  async register(user: Readonly<CreateUserDto>): Promise<InfoDetails | any> {
    const {
      name,
      surname,
      description,
      location,
      instrument,
      genre,
      experience,
      email,
      password,
    } = user;

    const existingUser = await this.infoService.findByEmail(email);
    if (existingUser) {
      return {
        error: 'Email is already in use!',
      };
    }

    const hashedPassword = await this.hashPassword(password);

    const newInfo = await this.infoService.create(
      name,
      surname,
      description,
      location,
      instrument,
      genre,
      experience,
      // phone,
      email,
      hashedPassword,
    );
    return this.infoService.getUserDetails(newInfo);
  }

  async passwordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<InfoDetails | null> {
    const user = await this.infoService.findByEmail(email);
    const userExist = !!user;
    if (!userExist) return null;

    const passwordMatch = await this.passwordMatch(password, user.password);

    if (!passwordMatch) return null; //! je zapor
    return this.infoService.getUserDetails(user);
  }

  async login(
    existingUser: ExistingUserDto,
  ): Promise<{ token: string } | null> {
    const { email, password } = existingUser;
    const user = await this.validateUser(email, password);

    if (!user) return null;

    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt };
  }
}
