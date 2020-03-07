import React from "react";
import "./UserModel.scss";
import { UserModel as DataModel, userModelKeys } from '../../../../types/UserModel'
import { useConnect } from '../../../Utils/Connect'
import { createToggleModalAction } from '../../../Actions/ModalActions'
import { EditUserModalIdentifier } from '../../../Modals/EditUserModal/EditUserModal'

interface Props {
  spaced?: boolean
  user: DataModel
}

export const UserModel: React.FC<Props> = ({ spaced, user}) => {

  const [,dispatch] = useConnect()
  const parseClassName = (): string => 'user' + (spaced? ' space-bottom' : '')

  return (
    <div className={parseClassName()} onClick={() => dispatch(createToggleModalAction(EditUserModalIdentifier, user))}>
      {userModelKeys().map( key => <div>{user[key]}</div>)}
    </div>
  );
};
