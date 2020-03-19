import { defaultInputValidator } from '../components/Utils/InputValidators'
import { Options, UserModelKeys } from './UserModel'

type InputFieldOptions<T> = {
  field: T,
  options: Options
}


const Name: InputFieldOptions<UserModelKeys> = {
  field: "name",
  options: [
    defaultInputValidator,
    'El campo no puede ser vacio',
    'text',
    'Nombre'
  ],
}

const Lastname: InputFieldOptions<UserModelKeys> = {
  field: "lastName",
  options: [
    defaultInputValidator,
    'El campo no puede ser vacio',
    'text',
    'Apellido'
  ],
}

const Dni: InputFieldOptions<UserModelKeys> = {
  field: "dni",
  options: [
    defaultInputValidator,
    "El campo no puede ser vacio",
    'number',
    'Dni'
  ],
}

const Mail: InputFieldOptions<UserModelKeys> = {
  field: "mail",
  options: [
    (mail: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail),
    "Formato de email incorrecto",
    'text',
    'Email'
  ],
}

const Phone: InputFieldOptions<UserModelKeys> = {
  field: "phone",
  options: [
    defaultInputValidator,
    "El campo no puede ser vacio",
    'number',
    'Telefono'
  ],
}

const Username: InputFieldOptions<UserModelKeys> = {
  field: "username",
  options: [
    defaultInputValidator,
    'El campo no puede ser vacio',
    'text',
    'Usuario'
  ],
}

const Role: InputFieldOptions<UserModelKeys> = {
  field: "role",
  options: [
    (value: string) => /\b(OPERATOR|COORDINATOR)\b/.test(value),
    'El campo debe ser "OPERATOR" o "COORDINATOR"',
    'text',
    'Rol'
  ],
}

const Id: InputFieldOptions<UserModelKeys> = {
  field: "id",
  options: [
    defaultInputValidator,
    'El campo no puede ser vacio',
    'text',
    'Id'
  ],
}

const Password: InputFieldOptions<UserModelKeys> = {
  field: "password",
  options: [
    (password: string) =>password.length >= 6,
    "La contraseña debe tener mas de 6 letras",
    'password',
    'Contraseña'
  ],
}


const userModelInputOptions: InputFieldOptions<UserModelKeys>[] = [
  Name,
  Lastname,
  Dni,
  Mail,
  Phone,
  Username,
  Role,
  Id,
  Password
]

export const getUserModelInputFieldOptions = (keyName: UserModelKeys): InputFieldOptions<UserModelKeys> =>
  userModelInputOptions.find( inputField => inputField.field === keyName)!