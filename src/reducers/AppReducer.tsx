import React from 'react'
import { Role } from '../components/Enums/Role'
import { UserModel } from '../types/UserModel'
import { Tabber } from '../components/Utils/Tabber'
import { LoginFormId } from '../components/Forms/LoginForm'
import { AddUserFormId } from '../components/Forms/UserForm'
import { DefaultLoginFormState, LoginFormState } from '../States/FormStates/LoginFormState'
import { AddUserFormState, DefaultAddUserFormState } from '../States/FormStates/AddUserFormState'
import { DefaultSurveyFormState, SurveyFormState } from '../States/FormStates/SurveyFormState'
import { SurveyFormId } from '../components/Home/AdminHome/SurveyPage/Constants'

export interface AppReducerState {
  navbarVisible: boolean
  modals: any
  openTab: Tabber
  forms: {
    [LoginFormId]: LoginFormState,
    [AddUserFormId]: AddUserFormState,
    [SurveyFormId]: SurveyFormState,
  }
  editingUser: UserModel
  access_token: string
  role: Role
  currentUser?: UserModel //el logueado
  alert: {
    alertMessage: string;
    alertVisible: boolean
  }
  isCalling: boolean
  dragInfo: {
    elem: any
    handler: () => void
  }
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
    [LoginFormId]: DefaultLoginFormState,
    [AddUserFormId]: DefaultAddUserFormState,
    [SurveyFormId]: DefaultSurveyFormState,
  },
  editingUser: new UserModel(),
  access_token: localStorage.getItem('token') || "",
  role: Role.ADMIN,
  openTab: new Tabber('operators-page'),
  alert: {
    alertMessage: '',
    alertVisible: false,
  },
  isCalling: false,
  dragInfo: {
    elem: {},
    handler: () => {},
  }
};