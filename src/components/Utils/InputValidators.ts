export const defaultInputValidator = (value: string): [boolean, string] => [value.length > 0, 'El campo no puede ser vacio']
