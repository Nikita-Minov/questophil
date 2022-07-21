import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {User} from '../models/user.model';
import {CreateUserDto} from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import {UpdateUserDto} from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser({username, email, password}: CreateUserDto) {
    {/* TODO Поменять в БД id на userId */}
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const user = await this.userRepository.create({
      username,
      password: hash,
      email,
    });
    return user.save();
  }

  async updateUser({
    userId,
    username,
    email,
    oldPassword,
    newPassword,
  }: UpdateUserDto) {
    {/* TODO Сделать красивее */}
    const saltRounds = 10;
    const user = await this.userRepository.findOne({where: {id: userId}});
    if (!user) throw new BadRequestException('Error!', 'User don\'t finded!');
    if (oldPassword && newPassword) {
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (isMatch) {
        const hash = await bcrypt.hash(newPassword, saltRounds);
        await user.set({
          password: hash,
          username: username?username:user.username,
          email: email?email:user.email,
        });
        return user.save();
      } else {
        throw new BadRequestException('Error!', 'Incorrect password!');
      }
    } else {
      await user.set({
        username: username?username:user.username,
        email: email?email:user.email,
      });
      return user.save();
    }
  }
}
