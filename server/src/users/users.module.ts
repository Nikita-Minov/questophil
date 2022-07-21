import {Module} from '@nestjs/common';
import {User} from 'src/models/user.model';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
