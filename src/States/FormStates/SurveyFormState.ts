import { UserModel } from '../../types/UserModel'
import {
  DatabaseSelectPageId, NameField,
  OperatorSelectPageId,
  QuotaCreatePageId,
  QuotasField,
  SelectedDatabaseField,
  SelectedOperatorsField
} from '../../components/Home/AdminHome/SurveyPage/Constants'
import { Database } from '../../types/Database'
import { NewCuota } from '../../types/Cuota'

export const SurveyStages: SurveyStage[] = [OperatorSelectPageId, DatabaseSelectPageId, QuotaCreatePageId]

export type SurveyStage = typeof OperatorSelectPageId | typeof DatabaseSelectPageId | typeof QuotaCreatePageId

export interface SurveyFormState {
  stage: SurveyStage
  [SelectedOperatorsField]: UserModel[]
  [SelectedDatabaseField]: Database
  [QuotasField]: NewCuota[]
  [NameField]: string
}

export const DefaultSurveyFormState: SurveyFormState = {
  stage: OperatorSelectPageId,
  [SelectedOperatorsField]: [],
  [SelectedDatabaseField]: {id: '', name: ''},
  [QuotasField]: [],
  [NameField]: '',
}