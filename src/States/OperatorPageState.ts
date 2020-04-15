import { Survey } from '../types/Survey'
import { Call } from '../types/Call'

export interface OperatorPageState {
  isCalling: boolean
  selectedSurvey: Survey
  currentCall?: Call
}

export const OperatorPageInitialState: OperatorPageState = {
  isCalling: false,
  selectedSurvey: {
    id: '',
    name: '',
    quotas: [],
    operator: [],
    database: {
      id: '',
      name: ''
    }
  },
  currentCall: undefined
}