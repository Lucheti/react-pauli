import { Phone } from './Phone'

export interface NextNumberResponse {
  phone: Phone,
  segmentsOpen: {
    [key: string]: boolean
  }
}