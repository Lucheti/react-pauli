import React from 'react'
import './DataList.scss'
import { User } from '../UserModel/User'

export const DataList: React.FC<{resource: any}> = ({ resource }) => {
  const asyncData = resource.data.read()

  return (
    <div className={'data-list'}>
      {asyncData && asyncData.map((user: any, i: number) => (
        <User key={i} user={user} spaced={i !== asyncData.length - 1} />
      ))}
    </div>
  )
}