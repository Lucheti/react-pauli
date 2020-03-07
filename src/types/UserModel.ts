export class CreateUserModel {
  constructor(
    public name: string = '',
    public lastName: string = '',
    public dni: string = '',
    public mail: string = '',
    public phone: string = '',
    public username: string = '',
    public password: string = ''
  ) {
  }
}
export type CreateUserModelKeys = keyof CreateUserModel
export const createUserModelKeys = Object.keys(new CreateUserModel()) as CreateUserModelKeys[];

export type CallCenter = {
  id: string,
  name: string
}
export class DisplayUserModel{
  constructor(
    public id: number = -1,
    public name: string = '',
    public lastName: string = '',
    public mail: string = '',
  ) {
  }
}
export type DisplayUserModelKeys = keyof DisplayUserModel
export const displayUserModelKeys = Object.keys(new DisplayUserModel()) as DisplayUserModelKeys[];


export class UserModel{
  constructor(
    public name: string = '',
    public lastName: string = '',
    public dni: string = '',
    public mail: string = '',
    public phone: string = '',
    public username: string = '',
    public role: string = '',
    public id: string = '',
  ) {
  }
}
export type UserModelKeys = keyof UserModel
export const userModelKeys = Object.keys(new UserModel()) as UserModelKeys[];
export const editUserModelKeys = userModelKeys.filter(key => key !== 'id')