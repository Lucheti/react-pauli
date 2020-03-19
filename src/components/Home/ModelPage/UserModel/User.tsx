import React from 'react'
import './UserModel.scss'
import { DisplayUserModelKeys, displayUserModelKeys, UserModel, } from '../../../../types/UserModel'
import { createToggleModalAction } from '../../../../Actions/ModalActions'
import { EditUserModalIdentifier } from '../../../Modals/EditUserModal/EditUserModal'
import { useConnect } from '../../../Utils/useConnect'

interface Props {
  spaced?: boolean
  user: UserModel
}

export const User: React.FC<Props> = useConnect<Props>(({ spaced, user, dispatch }) => {
  const parseClassName = (): string => 'user' + (spaced? ' space-bottom' : '')

  return (
    <div className={parseClassName()} onClick={() => dispatch(createToggleModalAction(EditUserModalIdentifier, user))}>
      {displayUserModelKeys.map(key => {
        const data = user[key]
        return renderUser(data, key)
      })}
    </div>
  );
})

const renderUser = (data: string | number, key: DisplayUserModelKeys) => <div key={key}>{data}</div>