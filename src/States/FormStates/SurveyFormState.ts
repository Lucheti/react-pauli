import { UserModel } from '../../types/UserModel'
import { OperatorSelectPageId } from '../../components/Home/AdminHome/SurveyPage/OperatorSelectPage/OperatorSelectPage'
import { SelectedOperatorsField } from '../../components/Home/AdminHome/SurveyPage/Constants'

export const SurveyStages: SurveyStage[] = [OperatorSelectPageId]

export type SurveyStage = typeof OperatorSelectPageId

export interface SurveyFormState {
  stage: SurveyStage
  [SelectedOperatorsField]: UserModel[]
}

export const DefaultSurveyFormState: SurveyFormState = {
  stage: OperatorSelectPageId,
  [SelectedOperatorsField]: [],
}