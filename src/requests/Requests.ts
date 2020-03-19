import { LoginToken } from '../types/loginToken'
import { createUserModelKeys, UserModel, userModelKeys } from '../types/UserModel'
import { Role } from '../components/Enums/Role'

const BASE_URL = (path?: string) => 'http://ec2-18-234-130-52.compute-1.amazonaws.com' + (path? path : "")

const loginOptions = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic Y2xpZW50SWQ6Y2xpZW50U2VjcmV0"
  },
}
export const login = (username: string, password: string): Promise<LoginToken> =>
  fetch(BASE_URL('/oauth/token?grant_type=password&username='+ username +'&password='+ password),loginOptions)
    .then(response => response.json())
    .catch( console.log )

export const getCurrentUser = (): Promise<UserModel> =>
  fetch(BASE_URL('/users/current'))
    .then(res => res.json())
    .catch( err => {
      localStorage.clear()
      console.log(err)
    } )

export const getUserByRole = (role: Role) =>
  fetch(BASE_URL('/users/all/' + role.toString() ))
    .then(res => res.json())
    .catch( console.log )

export const addUser = (role: Role, ...args: string[]) =>
  fetch(BASE_URL('/users/' + role.toString()),{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      createUserModelKeys.reduce( (acc , key, index) => ({...acc, [key]: args[index]}), {})
    )
  })
    .catch( console.log )

export const updateUser = (...args: string[]) =>
  fetch(BASE_URL('/users'),{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      userModelKeys.reduce( (acc , key, index) => ({...acc, [key]: args[index]}), {})
    )
  })
    .catch( console.log )



export const uploadDatabase = (multipartFile: any) =>
  fetch(BASE_URL('/db'),{
    method: 'POST',
    body: multipartFile
  }).then( console.log, console.log )
    .catch( console.log )
