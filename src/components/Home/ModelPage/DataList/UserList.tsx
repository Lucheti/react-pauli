import React from 'react'
import './DataList.scss'
import { User } from '../UserModel/User'
import { UserModel } from '../../../../types/UserModel'
import { WrappedPromise } from '../../../../requests/Suspense'

interface Props {
  resource: WrappedPromise<UserModel[]>
}

export const UserList: React.FC<Props> = ({ resource }) => {
  const asyncData = resource.data.read()

  return (
    <div className={'data-list'}>
      {asyncData && asyncData.map((user: UserModel, i: number) => (
        <User key={user.mail + i} user={user} spaced={i !== asyncData.length - 1} />
      ))}
    </div>
  )
}