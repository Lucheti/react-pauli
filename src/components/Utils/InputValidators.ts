export const defaultInputValidator = (value: string): boolean => !!value
export const mailValidator = (mail: string) => !!mail && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
export const roleValidator =  (value: string) => !!value && /\b(OPERATOR|COORDINATOR)\b/.test(value)
export const passwordValidator = (password: string) => !!password && password.length >= 6

export const defaultErrormessage = 'El campo es requerido'
export const mailErrorMessage = 'El formato del email es invalido'
export const passwordErrorMessage = 'La contraseña debe tener mas de 6 caracteres'