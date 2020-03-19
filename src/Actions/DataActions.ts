import { AppReducerAction, AppReducerState } from '../reducers/AppReducer'
import { UserModel } from '../types/UserModel'

const handleLoadUser = (state: AppReducerState, action: AppReducerAction) => ({...state, currentUser: action.payload})
export const createLoadUserAction = (user: UserModel): AppReducerAction => ({ payload: user, handler: handleLoadUser})