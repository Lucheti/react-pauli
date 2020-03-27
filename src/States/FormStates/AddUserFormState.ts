export interface AddUserFormState {
  username: string
  password: string
  dni: string
  name: string
  lastName: string
  mail: string
  phone: string
  callCenter: string
}

export const DefaultAddUserFormState: AddUserFormState = {
  username: '',
  password: '',
  dni: '',
  name: '',
  lastName: '',
  mail: '',
  phone: '',
  callCenter: '',
}