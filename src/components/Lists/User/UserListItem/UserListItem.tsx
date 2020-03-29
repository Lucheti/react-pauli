import React from 'react'
import './UserListItem.scss'
import { DisplayUserModelKeys, displayUserModelKeys, UserModel, } from '../../../../types/UserModel'
import { createToggleModalAction } from '../../../../Actions/ModalActions'
import { EditUserModalIdentifier } from '../../../Modals/EditUserModal/EditUserModal'
import { useConnect } from '../../../Utils/useConnect'

interface Props {
  spaced?: boolean
  user: UserModel
  onDrag?: (user: UserModel) => void
  editable?: boolean
}

export const UserListItem: React.FC<Props> = useConnect(({ spaced, user, onDrag, editable, dispatch}) => {
  const parseClassName = (): string => 'user' + (spaced? ' space-bottom' : '')
  const dragHandler = onDrag? onDrag : () => {}
  const handleClick = editable? () => dispatch(createToggleModalAction(EditUserModalIdentifier, user)) : () => {}

  return (
    <div className={parseClassName()} onClick={ handleClick } onDrag={ () => dragHandler(user) } draggable>
      {displayUserModelKeys.map(key => {
        const data = user[key]
        return renderUser(data, key)
      })}
    </div>
  );
})

const renderUser = (data: string | number, key: DisplayUserModelKeys) => <div key={key}>{data}</div>