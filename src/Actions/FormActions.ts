import { AppReducerPayloadAction, AppReducerState } from '../reducers/AppReducer'
import { FormIdentifier } from '../types/FormIdentifier'


interface InputChangePayload {
  inputName: string,
  inputValue: string
  formId: FormIdentifier
}
const handleInputChange = (state: AppReducerState, action: AppReducerPayloadAction<InputChangePayload>): AppReducerState =>
  ({...state,
    forms: {
    ...state.forms,
      [action.payload.formId]: {
        ...state.forms[action.payload.formId],
        [action.payload.inputName]: action.payload.inputValue
      }
    }
  })
export const changeInput = (formId: FormIdentifier, inputName: string, value: any): AppReducerPayloadAction<InputChangePayload> => ({ handler: handleInputChange , payload: {inputName: inputName, inputValue: value, formId: formId}})