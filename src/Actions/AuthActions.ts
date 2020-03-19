import { AppReducerAction, AppReducerState } from '../reducers/AppReducer'

export const LOGIN_SUCCESS = 'login success'

const handleLoginSuccess = (state: AppReducerState, action: AppReducerAction) => ({...state, access_token: action.payload})
export const createLoginSuccessAction = (token: string): AppReducerAction => ({ payload: token, handler: handleLoginSuccess })