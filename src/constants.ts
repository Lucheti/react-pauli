import React from 'react'
import { APP_REDUCER_INITIAL_STATE, AppReducerAction, AppReducerState } from './reducers/AppReducer'

export const AppContext = React.createContext<[AppReducerState, React.Dispatch<AppReducerAction>]>([APP_REDUCER_INITIAL_STATE, () => APP_REDUCER_INITIAL_STATE])