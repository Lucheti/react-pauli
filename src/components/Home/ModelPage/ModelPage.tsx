import React, { memo, Suspense } from 'react'
// @ts-ignore
import { DisplayUserModel, UserModel, UserModel as Model } from '../../../types/UserModel'
import "./ModelPage.scss";
import { AddUserModal } from '../../Modals/AddUserModal/AddUserModal'
import { AddUserButton } from './AddUserButton/AddUserButton'
import { EditUserModal } from '../../Modals/EditUserModal/EditUserModal'
import { createResource } from '../../../requests/Suspense'
import { Spinner } from '../../Spinner/Spinner'
import { UserList } from './DataList/UserList'
import { useConnect } from '../../Utils/useConnect'
import { Role } from '../../Enums/Role'
import { useCounter } from '../../Utils/CustomHooks'

interface Props {
  title: string;
  fetcher: (role: Role) => Promise<UserModel[]>
  role: Role
}

const ModelPage: React.FC<Props> = ({ title, fetcher, role }) => {
  const [shouldUpdate, update] = useCounter()
  const resource = React.useMemo(() => createResource<UserModel[]>( () => fetcher(role) )(), [shouldUpdate])

  return (
    <div className="users">

      <div className={"title-container"}>
        <h3 className={"title"}>{title}</h3>
        <AddUserButton/>
      </div>
      <Suspense fallback={<Spinner/>}>
        <UserList resource={resource}/>
      </Suspense>

        <AddUserModal update={update}/>

        <EditUserModal update={update}/>
    </div>
  );
};

export default ModelPage