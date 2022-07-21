export class UpdateUserDto {
  userId: number;
  username: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}
