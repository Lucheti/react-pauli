import { NewCuota } from './Cuota'

export interface NewSurvey {
  name: string
  operatorsId: string[]
  phoneDatabaseId: string
  quotas: NewCuota[]
}