import React, { Suspense } from 'react'
import { UserModel } from '../../../types/UserModel'
import './ModelPage.scss'
import { AddUserModal } from '../../Modals/AddUserModal/AddUserModal'
import { AddUserButton } from './AddUserButton/AddUserButton'
import { EditUserModal } from '../../Modals/EditUserModal/EditUserModal'
import { createResource } from '../../../requests/Suspense'
import { Spinner } from '../../Spinner/Spinner'
import { UserList } from '../../Lists/User/UserList/UserList'
import { Role } from '../../Enums/Role'
import { useCounter } from '../../Utils/CustomHooks'
import { getUserByRole } from '../../../requests/Requests'
import { Title } from '../../Title/Title'

interface Props {
  title: string;
  role: Role
}

const ModelPage: React.FC<Props> = ({ title, role }) => {
  const [shouldUpdate, update] = useCounter()
  const resource = React.useMemo(() => createResource<UserModel[]>( () => getUserByRole(role) )(), [shouldUpdate])

  return (
    <div className="users">
      <Title title={title}>
        <AddUserButton/>
      </Title>
      <Suspense fallback={<Spinner/>}>
        <UserList resource={resource} editable />
      </Suspense>

        <AddUserModal update={update}/>

        <EditUserModal update={update}/>
    </div>
  );
};

export default ModelPage