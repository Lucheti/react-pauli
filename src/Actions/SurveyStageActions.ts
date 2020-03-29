import { SurveyStage } from '../States/FormStates/SurveyFormState'
import { AppReducerPayloadAction, AppReducerState } from '../reducers/AppReducer'
import { SurveyFormId } from '../components/Home/AdminHome/SurveyPage/Constants'

const handleChangeSurveyStage = (state: AppReducerState, action: AppReducerPayloadAction<SurveyStage>): AppReducerState =>
  ({...state,
    forms: {
      ...state.forms,
      [SurveyFormId]: {
        ...state.forms[SurveyFormId],
        stage: action.payload
      }
    }
  })

export const changeSurveyStage = (stage: SurveyStage): AppReducerPayloadAction<SurveyStage> => ({ handler: handleChangeSurveyStage, payload: stage})