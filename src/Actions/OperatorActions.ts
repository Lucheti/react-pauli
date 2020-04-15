import {
  AppReducerPayloadAction,
  AppReducerPlainAction,
  AppReducerState
} from '../reducers/AppReducer'
import { Survey } from '../types/Survey'
import { OperatorPageId } from '../components/Home/OperatorHome/Constants'
import { Call } from '../types/Call'

const handleToggleCalling = (state: AppReducerState): AppReducerState => ({
  ...state,
  [OperatorPageId]: {
    ...state[OperatorPageId],
    isCalling: !state[OperatorPageId].isCalling
  }
})
export const toggleCalling = (): AppReducerPlainAction => ({ handler: handleToggleCalling})

const handleSetSurvey = ( state: AppReducerState, action: AppReducerPayloadAction<Survey>): AppReducerState => ({
  ...state,
  [OperatorPageId]: {
    ...state[OperatorPageId],
    selectedSurvey: action.payload
  }
})
export const setSurvey = ( survey: Survey ): AppReducerPayloadAction<Survey> => ({ handler: handleSetSurvey, payload: survey})


const handleSetCall = ( state: AppReducerState, action: AppReducerPayloadAction<Call>): AppReducerState => ({
  ...state,
  [OperatorPageId]: {
    ...state[OperatorPageId],
    currentCall: action.payload
  }
})

export const setCall = ( call: Call ): AppReducerPayloadAction<Call> => ({ handler: handleSetCall, payload: call})