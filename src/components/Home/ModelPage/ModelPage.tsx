import React, { Suspense } from 'react'
import { UserModel } from '../../../types/UserModel'
import './ModelPage.scss'
import { AddUserModal} from '../../Modals/AddUserModal/AddUserModal'
import { AddButton } from '../../Buttons/AddButton/AddButton'
import { EditUserModal } from '../../Modals/EditUserModal/EditUserModal'
import { createResource } from '../../../requests/Suspense'
import { Spinner } from '../../Spinner/Spinner'
import { UserList } from '../../Lists/User/UserList/UserList'
import { Role } from '../../Enums/Role'
import { useCounter } from '../../Utils/CustomHooks'
import { getUserByRole } from '../../../requests/Requests'
import { Title } from '../../Title/Title'
import { useConnect } from '../../Utils/useConnect'
import { createToggleModalAction } from '../../../Actions/ModalActions'
import { AddUserModalIdentifier } from '../../Modals/constants'

interface Props {
  title: string;
  role: Role
}

const ModelPage: React.FC<Props> = useConnect(({ title, role, dispatch }) => {
  const [shouldUpdate, update] = useCounter()
  const resource = React.useMemo(() => createResource<UserModel[]>( () => getUserByRole(role) )(), [shouldUpdate])

  return (
    <div className="users">
      <Title title={title}>
        <AddButton onClick={() => dispatch(createToggleModalAction(AddUserModalIdentifier))}/>
      </Title>
      <Suspense fallback={<Spinner/>}>
        <UserList resource={resource} editable />
      </Suspense>

        <AddUserModal update={update}/>

        <EditUserModal update={update}/>
    </div>
  );
});

export default ModelPage