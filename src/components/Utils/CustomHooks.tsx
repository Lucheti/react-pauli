import React  from 'react'
import { AppReducerAction } from '../../reducers/AppReducer'


export interface Ref {
  ref: React.RefObject<HTMLInputElement>,
  value: string | undefined
}

export const useInput = (): Ref => {
  const ref = React.useRef<HTMLInputElement>(null)
  return {
    ref: ref,
    get value() { return ref.current? ref.current.value : undefined},
  }
}


