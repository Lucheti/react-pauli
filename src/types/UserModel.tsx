import React from 'react'

export type CallCenter = {
  code?: string
  name?: string
  id?: string
};

export class DisplayUserModel {
  constructor(
    public name: string = "",
    public lastName: string = "",
    public mail: string = ""
  ) {}
}
export type DisplayUserModelKeys = keyof DisplayUserModel;
export const displayUserModelKeys = Object.keys(
  new DisplayUserModel()
) as DisplayUserModelKeys[];

export class UserModel {
  constructor(
    public name: string = "",
    public lastName: string = "",
    public dni: string = "",
    public mail: string = "",
    public phone: string = "",
    public username: string = "",
    public role: string = "",
    public id: string = "",
    public password: string = "",
    public callCenter: CallCenter = {
      code: '',
      name: '',
      id: ''
    }
  ) {}
}
export type UserModelKeys = keyof UserModel;
export const userModelKeys = Object.keys(new UserModel()) as UserModelKeys[];
export const editUserModelKeys = userModelKeys.filter(key => key !== "id");

type Validator = (value: string) => boolean;
type Error = string;
type Type = string;
type Displayname = string;
export type Options = [Validator, Error, Type, Displayname];
