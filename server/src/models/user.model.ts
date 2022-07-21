import {Table, Model, Column, DataType} from 'sequelize-typescript';

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
}

@Table({tableName: 'users'})
export class User extends Model<UserAttributes, User> {
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

  @Column({type: DataType.STRING, validate: {notEmpty: true, len: [6, 24]}})
    username: string;

  @Column({type: DataType.STRING, validate: {notEmpty: true}})
    password: string;

  @Column({type: DataType.STRING, validate: {notEmpty: true, isEmail: true}})
    email: string;
}
