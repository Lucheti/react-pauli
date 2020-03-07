import { AppReducerAction, AppReducerState } from '../../reducers/AppReducer'
import { DisplayUserModel, UserModel } from '../../types/UserModel'

const handleToggleModal = (state: AppReducerState, action: AppReducerAction) => ({
  ...state,
  modals: {
    ...state.modals,
    [action.payload.name]: !state.modals[action.payload.name]
  },
  editingUser: action.payload.user
})
export const createToggleModalAction = (name: string, user?: UserModel): AppReducerAction => ({ payload: { name: name, user: user}, handler: handleToggleModal})
