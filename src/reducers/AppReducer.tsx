import React from "react";
import { Role } from "../components/Enums/Role";
import { CallCenter, UserModel } from '../types/UserModel'
import { Tabber } from "../components/Utils/Tabber";
import {
  DefaultLoginFormState,
  LoginFormState
} from "../States/FormStates/LoginFormState";
import {
  AddUserFormState,
  DefaultAddUserFormState
} from "../States/FormStates/AddUserFormState";
import {
  DefaultSurveyFormState,
  SurveyFormState
} from "../States/FormStates/SurveyFormState";
import { SurveyFormId } from "../components/Home/AdminHome/SurveyPage/Constants";
import { OperatorPageId } from "../components/Home/OperatorHome/Constants";
import {
  OperatorPageInitialState,
  OperatorPageState
} from "../States/OperatorPageState";
import {
  AddCallCenterFormId,
  AddUserFormId,
  LoginFormId
} from "../components/Forms/constants";
import {
  AddCallCenterFormState,
  DefaultAddCallCenterFormState
} from "../States/FormStates/AddCallCenterFormState";
import { DefaultModalState, ModalState } from '../States/Modals/ModalState'
import {
  AddCallCenterModalId,
  AddUserModalIdentifier, EditCallcenterModalId,
  EditUserModalIdentifier
} from '../components/Modals/constants'

export interface AppReducerState {
  navbarVisible: boolean;
  modals: {
    [AddUserModalIdentifier]: ModalState<undefined>;
    [EditUserModalIdentifier]: ModalState<UserModel>;
    [AddCallCenterModalId]: ModalState<undefined>;
    [EditCallcenterModalId]: ModalState<CallCenter>
  };
  openTab: Tabber;
  forms: {
    [LoginFormId]: LoginFormState;
    [AddUserFormId]: AddUserFormState;
    [SurveyFormId]: SurveyFormState;
    [AddCallCenterFormId]: AddCallCenterFormState;
  };
  editingUser: UserModel;
  access_token: string;
  role: Role;
  currentUser?: UserModel; //el logueado
  alert: {
    alertMessage: string;
    alertVisible: boolean;
  };
  dragInfo: {
    elem: any;
    handler: () => void;
  };
  [OperatorPageId]: OperatorPageState;
}

export type AppReducerAction<T = any> =
  | AppReducerPayloadAction<T>
  | AppReducerPlainAction;

export interface AppReducerPayloadAction<T> {
  payload: T;
  handler: (
    state: AppReducerState,
    action: AppReducerPayloadAction<T>
  ) => AppReducerState;
}
export interface AppReducerPlainAction {
  handler: (
    state: AppReducerState,
    action: AppReducerPlainAction
  ) => AppReducerState;
}

export const AppReducer: React.Reducer<AppReducerState, AppReducerAction> = (
  state: AppReducerState,
  action: AppReducerAction
) =>
  // @ts-ignore
  action.handler(state, action);

export const APP_REDUCER_INITIAL_STATE: AppReducerState = {
  navbarVisible: true,
  modals: {
    [AddUserModalIdentifier]: DefaultModalState,
    [EditUserModalIdentifier]: DefaultModalState,
    [AddCallCenterModalId]: DefaultModalState,
    [EditCallcenterModalId]: DefaultModalState
},
  forms: {
    [LoginFormId]: DefaultLoginFormState,
    [AddUserFormId]: DefaultAddUserFormState,
    [SurveyFormId]: DefaultSurveyFormState,
    [AddCallCenterFormId]: DefaultAddCallCenterFormState
  },
  editingUser: new UserModel(),
  access_token: localStorage.getItem("token") || "",
  role: Role.ADMIN,
  openTab: new Tabber("operators-page"),
  alert: {
    alertMessage: "",
    alertVisible: false
  },
  dragInfo: {
    elem: {},
    handler: () => {}
  },
  [OperatorPageId]: OperatorPageInitialState
};
