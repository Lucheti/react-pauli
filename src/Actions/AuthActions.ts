import { AppReducerAction, AppReducerPayloadAction, AppReducerState } from '../reducers/AppReducer'

export const LOGIN_SUCCESS = 'login success'

const handleLoginSuccess = (state: AppReducerState, action: AppReducerPayloadAction<string>) => ({...state, access_token: action.payload})
export const createLoginSuccessAction = (token: string): AppReducerPayloadAction<string> => ({ payload: token, handler: handleLoginSuccess })