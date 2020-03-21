import React from 'react'
import { Role } from '../components/Enums/Role'
import { UserModel } from '../types/UserModel'
import { Tabber } from '../components/Utils/Tabber'
import { loginFormId } from '../components/Forms/LoginForm'
import { addUserForm } from '../components/Forms/UserFrom'

export interface AppReducerState {
  navbarVisible: boolean
  modals: any
  openTab: Tabber
  forms: any
  editingUser: UserModel
  access_token: string
  role: Role
  currentUser?: UserModel //el logueado
  alert: {
    alertMessage: string;
    alertVisible: boolean
  }
  isCalling: boolean
}

export type AppReducerAction <T = any> = AppReducerPayloadAction<T> | AppReducerPlainAction

export interface AppReducerPayloadAction <T> {
  payload: T;
  handler: (state: AppReducerState, action: AppReducerPayloadAction<T>) => AppReducerState
}
export interface AppReducerPlainAction {
  handler: (state: AppReducerState, action: AppReducerPlainAction) => AppReducerState
}

export const AppReducer: React.Reducer<AppReducerState, AppReducerAction> = (
  state: AppReducerState,
  action: AppReducerAction
) =>
  // @ts-ignore
  action.handler(state, action)

export const APP_REDUCER_INITIAL_STATE: AppReducerState = {
  navbarVisible: true,
  modals: {},
  forms: {
    [loginFormId]: {},
    [addUserForm]: {}
  },
  editingUser: new UserModel(),
  access_token: localStorage.getItem('token') || "",
  role: Role.ADMIN,
  openTab: new Tabber('operators-page'),
  alert: {
    alertMessage: '',
    alertVisible: false,
  },
  isCalling: false
};