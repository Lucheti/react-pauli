import React from 'react'
import { CHANGE_TAB, TOGGLE_NAVBAR } from '../Components/Actions/NavBarActions'

export interface AppReducerState {
  navbarVisible: boolean
  mainViewComponent: React.ComponentType
  modals: any
}

export interface AppReducerAction {
  type: string;
  payload?: any;
}

export const AppReducer: React.Reducer<AppReducerState,AppReducerAction> = (state: AppReducerState, action: AppReducerAction) => {
  switch (action.type) {
    case TOGGLE_NAVBAR: return {...state, navbarVisible: !state.navbarVisible}
    case CHANGE_TAB: return {...state, mainViewComponent: action.payload}
    default: return state
  }
}

export const APP_REDUCER_INITIAL_STATE: AppReducerState = {
  navbarVisible: false,
  mainViewComponent: () => <div>asd</div>,
  modals: {}
}