import React from 'react'
import { Role } from '../components/Enums/Role'
import { DisplayUserModel, UserModel } from '../types/UserModel'
import { Tabber } from '../components/Utils/Tabber'

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

export interface AppReducerAction {
  payload?: any;
  handler: (state: AppReducerState, action: AppReducerAction) => AppReducerState
}

export const AppReducer: React.Reducer<AppReducerState, AppReducerAction> = (
  state: AppReducerState,
  action: AppReducerAction
) => action.handler(state, action)

export const APP_REDUCER_INITIAL_STATE: AppReducerState = {
  navbarVisible: true,
  modals: {},
  forms: {},
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