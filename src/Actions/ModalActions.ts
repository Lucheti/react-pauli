import { AppReducerAction, AppReducerPayloadAction, AppReducerState } from '../reducers/AppReducer'
import { UserModel } from '../types/UserModel'
import { ModalIdentifier } from '../types/ModalIdentifier'

interface ModalActionPayload<T> {
  identifier: ModalIdentifier
  elem?: T
}

const handleToggleModal = <T> (state: AppReducerState, action: AppReducerPayloadAction<ModalActionPayload<T>>) => ({
  ...state,
  modals: {
    ...state.modals,
    [action.payload.identifier]: {
      isOpen: !(state.modals[action.payload.identifier].isOpen),
      elem: action.payload.elem
    }
  },
})
export const createToggleModalAction = <T> (name: ModalIdentifier, elem?: T): AppReducerPayloadAction<ModalActionPayload<T>> => ({ payload: { identifier: name, elem: elem}, handler: handleToggleModal})
