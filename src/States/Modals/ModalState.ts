export interface ModalState<T> {
  isOpen: boolean
  elem?: T
}

export const DefaultModalState: ModalState<any> = {
  isOpen: false
}