import { AppReducerAction, AppReducerPayloadAction, AppReducerState } from '../reducers/AppReducer'
import { UserModel } from '../types/UserModel'

interface ModalActionPayload {
  name: string
  user?: UserModel
}

const handleToggleModal = (state: AppReducerState, action: AppReducerPayloadAction<ModalActionPayload>) => ({
  ...state,
  modals: {
    ...state.modals,
    [action.payload.name]: !state.modals[action.payload.name]
  },
  editingUser: action.payload.user || new UserModel()
})
export const createToggleModalAction = (name: string, user?: UserModel): AppReducerPayloadAction<ModalActionPayload> => ({ payload: { name: name, user: user}, handler: handleToggleModal})
