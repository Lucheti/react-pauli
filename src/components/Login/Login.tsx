import React, { Suspense } from 'react'
import { Form } from '../Form/Form'
import './Login.css'
import { login } from '../../requests/Requests'
import { createLoginSuccessAction } from '../Actions/AuthActions'
import { createResource, WrappedPromise } from '../../requests/Suspense'
import { LoginToken } from '../../types/loginToken'
import { Spinner } from '../Spinner/Spinner'
import { useConnect } from '../Utils/useConnect'
import { createUserModelKeysValidator, UserModel } from '../../types/UserModel'

interface Props {
  resource: (...args: string[]) => { data: { read(): LoginToken | undefined } }
}

export const LoginPage: React.FC<Props> = useConnect<Props>(({resource, state, dispatch}) => {

  const [data, setdata] = React.useState<WrappedPromise<LoginToken>>({data: { read: () => undefined}})
  const { access_token } = state

  const handleLogin = (...args: string[]) => {
    setdata(resource(...args))
  }

  const result = data.data.read()

  if (result && result.access_token) dispatch(createLoginSuccessAction(result.access_token))
  if (access_token) {
    localStorage.setItem('token', access_token)
    window.location.href = "/home"
  }

  return (
  <>
      {result && result.error && <p className='error'> Ha habido un error mientras intentabas ingresar, porfavor revise las credenciales e intente nuevamente</p>}
      <Form
        inputList={['usuario', 'contraseña']}
        inputTypes={['text', "password"]}
        title={'Log In'}
        handleSubmit={ handleLogin }
        buttonText={'Entrar'}
        className={'form'}
        validators={createUserModelKeysValidator}
      />
  </>
)})

export const LoginWrapper = () => {
  const resource = createResource<LoginToken>( login )

  return (
    <div className="login">
      <div className='form-wrapper'>
        <Suspense fallback={<Spinner/>}>
          <LoginPage resource={resource}/>
        </Suspense>
      </div>
    </div>
  )}