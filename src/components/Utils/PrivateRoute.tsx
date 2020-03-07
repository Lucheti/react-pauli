import React from 'react'
import { Redirect, Route } from 'react-router-dom'

interface Props {
  path: string,
  component: React.ComponentType,
  authorize?: () => boolean
}

const defaultAuthorize = () => !!localStorage.getItem('role')

export const PrivateRoute: React.FC<Props> = ({path, component, authorize = defaultAuthorize}) => {

  return  authorize()?
    <Route path={path} component={ component }/>
    :
    <Redirect to={'/login'}/>
}