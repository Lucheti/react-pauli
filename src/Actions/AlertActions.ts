import { AppReducerAction, AppReducerState } from '../reducers/AppReducer'

const handleHideAlert = (state: AppReducerState): AppReducerState => ({...state, alert: {...state.alert, alertVisible: false} })
export const hideAlert = (): AppReducerAction => ({handler: handleHideAlert})

const handleShowAlert = (state: AppReducerState, action: AppReducerAction): AppReducerState => ({...state, alert: {...state.alert, alertVisible: true, alertMessage: action.payload} })
export const showAlert = (message: string): AppReducerAction => ({handler: handleShowAlert, payload: message})
