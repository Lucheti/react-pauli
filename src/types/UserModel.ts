export class CreateUserModel {
  constructor(
    public name: string = 'asd',
    public lastName: string = 'asd',
    public dni: string = '',
    public mail: string = '',
    public phone: string = '',
    public username: string = '',
    public password: string = ''
  ) {
  }
}

export const userModelKeys = Object.keys(new CreateUserModel());
console.log(Object.keys(new CreateUserModel()))

export type User = {
  id: number;
  username: string;
  dni: string;
  name: string;
  lastName: string;
  mail: string;
  phone: string;
  role: string;
};
