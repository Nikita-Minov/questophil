import {Body, Controller, Post, Put} from '@nestjs/common';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  createUser(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string) {
    return this.usersService.createUser({username, email, password});
  }

  @Put()
  updateUser(
    @Body('userId') userId: number,
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
  ) {
    return this.usersService.updateUser({
      userId,
      username,
      email,
      oldPassword,
      newPassword,
    });
  }
}
