import React from 'react'
import { WrappedPromise } from '../../../../requests/Suspense'
import { Database } from '../../../../types/Database'
import './DatabaseList.scss'
import { DatabaseListItem } from '../DatabaseListItem/DatabaseListItem'

interface Props {
  resource: WrappedPromise<Database[]>
}

export const DatabaseList: React.FC<Props> = ({resource}) => {
  const data = resource.data.read()

  return (
      <div className={"database-list"}>
        {data &&
          data.map((database, index) => <DatabaseListItem database={database} key={index}/>)}
      </div>
  );
}