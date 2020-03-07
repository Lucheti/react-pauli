import React from 'react'
import { AddUserForm } from './AddUserForm/AddUserForm'
import { Modal } from '../../Modal/Modal'
import { Role } from '../../Enums/Role'

interface Props {
}

export const AddUserModal: React.FC<Props> = () => {

    return <div>
        <Modal modalId={AddUserModalIdentifier}>
            <AddUserForm modalId={AddUserModalIdentifier} />
        </Modal>
    </div>
}

export const AddUserModalIdentifier = 'add-user-modal'