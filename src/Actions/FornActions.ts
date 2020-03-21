import { AppReducerPayloadAction, AppReducerState } from '../reducers/AppReducer'


interface InputChangePayload {
  inputName: string,
  inputValue: string
  formId: string
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
export const changeInput = (formId: string, inputName: string, value: string): AppReducerPayloadAction<InputChangePayload> => ({ handler: handleInputChange , payload: {inputName: inputName, inputValue: value, formId: formId}})