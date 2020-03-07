import React from 'react'
import { Modal } from '../../Modal/Modal'
import { EditUserForm } from './EditUserForm/EditUserForm'

interface Props {}

export const EditUserModal: React.FC<Props> = () => {

  return <div>
    <Modal modalId={EditUserModalIdentifier}>
      <EditUserForm modalId={EditUserModalIdentifier}/>
    </Modal>
  </div>
}

export const EditUserModalIdentifier = 'edit-user-modal'