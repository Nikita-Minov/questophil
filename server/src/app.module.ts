import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './models/user.model';
import {UsersModule} from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `./src/env/.${process.env.NODE_ENV}.env`,
  }), SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    models: [User],
    autoLoadModels: true,
    synchronize: true,
  }), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
