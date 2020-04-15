import { Town } from './Town'
import { Segment } from './Segment'

export interface Cuota {
  town: Town
  values: Segment[]
  totalValue: string
}

export interface NewCuota {
  totalValue: string,
  townId: string,
  values: Segment[]
}

export const DefaultNewCuota: NewCuota = {
  totalValue: '',
  townId: '',
  values: []
}