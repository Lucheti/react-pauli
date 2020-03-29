import { UserModel } from '../../types/UserModel'
import { OperatorSelectPageId } from '../../components/Home/AdminHome/SurveyPage/OperatorSelectPage/OperatorSelectPage'
import { SelectedOperatorsField } from '../../components/Home/AdminHome/SurveyPage/Constants'
import { DatabaseSelectPageId } from '../../components/Home/AdminHome/SurveyPage/DatabaseSelectPage/DatabaseSelectPage'

export const SurveyStages: SurveyStage[] = [OperatorSelectPageId, DatabaseSelectPageId]

export type SurveyStage = typeof OperatorSelectPageId | typeof DatabaseSelectPageId

export interface SurveyFormState {
  stage: SurveyStage
  [SelectedOperatorsField]: UserModel[]
}

export const DefaultSurveyFormState: SurveyFormState = {
  stage: OperatorSelectPageId,
  [SelectedOperatorsField]: [],
}