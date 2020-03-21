import { AppReducerAction, AppReducerPayloadAction, AppReducerState } from '../reducers/AppReducer'
import { UserModel } from '../types/UserModel'

const handleLoadUser = (state: AppReducerState, action: AppReducerPayloadAction<UserModel>) => ({...state, currentUser: action.payload})
export const createLoadUserAction = (user: UserModel): AppReducerPayloadAction<UserModel> => ({ payload: user, handler: handleLoadUser})