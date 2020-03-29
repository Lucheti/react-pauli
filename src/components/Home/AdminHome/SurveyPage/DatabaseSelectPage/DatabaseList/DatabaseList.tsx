import React from 'react'
import { WrappedPromise } from '../../../../../../requests/Suspense'
import { Database } from '../../../../../../types/Database'

interface Props {
  resource: WrappedPromise<Database[]>
}

export const DatabaseList: React.FC<Props> = ({resource}) => {

  const data = resource.data.read()

    return <div>
      {data && data.map( (database, index) => <div key={index}><p>{database.name}</p></div>)}
    </div>
}