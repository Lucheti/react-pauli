import React from 'react'
import { Modal } from '../../Modal/Modal'
import { UserForm } from '../../Forms/UserForm'
import { addUser } from '../../../requests/Requests'
import { UserModel } from '../../../types/UserModel'
import { createToggleModalAction } from '../../../Actions/ModalActions'
import { useConnect } from '../../Utils/useConnect'
import { Spinner } from '../../Spinner/Spinner'
import { showAlert } from '../../../Actions/AlertActions'
import { AddUserModalIdentifier } from '../constants'

interface Props {
  update: () => void;
}

export const AddUserModal: React.FC<Props> = useConnect(
  ({ update, dispatch }) => {
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = (user: UserModel) => {
      addUser(user).then(() => {
        dispatch(createToggleModalAction(AddUserModalIdentifier));
        setLoading(true);
        update();
      })
        .catch(err => {
            dispatch(showAlert('Algo salio mal:'))
            console.log(err)
        });
    };

    return (
      <div>
        <Modal modalId={AddUserModalIdentifier}>
          {loading && <Spinner text={"Agregando..."} />}
          {!loading && <UserForm onSubmit={handleSubmit} />}
        </Modal>
      </div>
    );
  }
);

