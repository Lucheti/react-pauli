import { defaultInputValidator } from '../components/Utils/InputValidators'

const onlyNumbersRegex = /^[0-9]*$/gm


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
export const createUserModelKeysValidator =
  createUserModelKeys.reduce( (acc, key) => acc.set(key,defaultInputValidator), new Map<string, (value: string) => [boolean, string]>())
    .set("mail", (mail: string) => [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail), 'Formato de email incorrecto'] )
    .set("dni", (dni: string) => [onlyNumbersRegex.test(dni), 'No debe contener con letras'])
    .set("phone", (phone: string) => [onlyNumbersRegex.test(phone), 'No debe contener con letras'])
    .set("password", (password: string) => [password.length >= 8, 'La contraseña debe tener mas de 8 letras'])


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