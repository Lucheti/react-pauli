import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useConnect } from './useConnect'

interface Props {
  path: string,
  component: React.ComponentType,
}

export const PrivateRoute: React.FC<Props> = useConnect<Props>(({path, component, state}) => {

  const {access_token} = state

  return  access_token?
    <Route path={path} component={ component }/>
    :
    <Redirect to={'/login'}/>
})