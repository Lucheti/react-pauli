import { Input, InputProps } from '../components/Form/Input/Input'
import React from 'react'
import { getUserModelInputFieldOptions } from './InputFieldOptions'

export type CallCenter = {
  id: string;
  name: string;
};

export class DisplayUserModel {
  constructor(
    public id: number = -1,
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
    public password: string = ""
  ) {}
}
export type UserModelKeys = keyof UserModel;
export const userModelKeys = Object.keys(new UserModel()) as UserModelKeys[];
export const editUserModelKeys = userModelKeys.filter(key => key !== "id");
export const createUserModelKeys = userModelKeys
  .filter(key => key !== "id")
  .filter(key => key !== "password");
type Validator = (value: string) => boolean;
type Error = string;
type Type = string;
type Displayname = string;
export type Options = [Validator, Error, Type, Displayname];

const userModelInfo = userModelKeys
  .map(getUserModelInputFieldOptions)
  .reduce(
    (acc, { field, options }) => acc.set(field, options),
    new Map<UserModelKeys, Options>()
  );

export const userModelInputs: Map<
  UserModelKeys,
  React.FC<InputProps>
> = userModelKeys.reduce(
  (map, key) =>
    map.set(key, ({ dispatch, initialValue, ref }) => {
      const [validator, errorMessage, type, displayName] = userModelInfo.get( key )!;
      return (
        <Input
          dispatch={dispatch}
          name={displayName}
          type={type}
          initialValue={initialValue}
          isValid={validator}
          errorMessage={errorMessage}
          ref={ref}
          key={key}

        />
      );
    }),
  new Map<UserModelKeys, React.FC<InputProps>>()
);
