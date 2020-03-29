import React, { Suspense} from 'react'
import { AdminHome } from './AdminHome/AdminHome'
import { createResource, WrappedPromise } from '../../requests/Suspense'
import { getCurrentUser } from '../../requests/Requests'
import { UserModel } from '../../types/UserModel'
import { createLoadUserAction } from '../../Actions/DataActions'
import { useConnect } from '../Utils/useConnect'
import { Alert } from '../Alert/Alert'
import { Role } from '../Enums/Role'
import { Redirect } from 'react-router'
import { OperatorHome } from './OperatorHome/OperatorHome'

export const HomeComponent: React.FC = () => {

  const resource = React.useMemo(() => createResource<UserModel>( getCurrentUser )(), [])
  return (
    <Suspense fallback={<h1> Pauli... </h1>}>
      <Component resource={resource}/>
      <Alert/>
    </Suspense>
  );
}

interface Props {
  resource: WrappedPromise<UserModel>
}

const Component: React.FC<Props> = useConnect(({resource, state, dispatch}) => {
  const { currentUser } = state

  if (!currentUser){
    debugger
    const data = resource.data.read()
    data && dispatch(createLoadUserAction(data))
  }
  if (!currentUser) return null
  if(currentUser.role === Role.ADMIN) return <AdminHome/>
  if(currentUser.role === Role.OPERATOR) return <OperatorHome/>
  return <Redirect to={'/login'}/>
})

// return <OperatorHome/>
