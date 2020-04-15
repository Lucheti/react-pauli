import { UserModel } from './UserModel'
import { Phone } from './Phone'
import { Survey } from './Survey'

export interface Call {
  callState?: string, //[ PROVIDED, ONGOING, BUSY, COMPLETED ]
  endTime?:	string,
  operator?:	UserModel,
  phone: Phone
  segment?: string,
  startTime?:	string,
  survey: Survey
}