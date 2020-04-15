import { Cuota } from './Cuota'
import { UserModel } from './UserModel'
import { Database } from './Database'

export interface Survey {
  id: string
  name: string
  quotas: Cuota[]
  operator: UserModel[]
  database: Database
}

