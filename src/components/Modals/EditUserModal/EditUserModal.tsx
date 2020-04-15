import React from 'react'
import { Modal } from '../../Modal/Modal'
import { UserForm } from '../../Forms/UserForm'
import { UserModel } from '../../../types/UserModel'
import { updateUser } from '../../../requests/Requests'
import { createToggleModalAction } from '../../../Actions/ModalActions'
import { showAlert } from '../../../Actions/AlertActions'
import { useConnect } from '../../Utils/useConnect'
import { Spinner } from '../../Spinner/Spinner'
import { EditUserModalIdentifier } from '../constants'

interface Props {
  update: () => void
}

export const EditUserModal: React.FC<Props> = useConnect(({dispatch, state, update}) => {
  const [loading, setLoading] = React.useState(false);
  const modalState = state.modals[EditUserModalIdentifier]
  const { elem: editingUser} = modalState

  React.useEffect(() => setLoading(false),[])

  const handleSubmit = (user: UserModel) => {
    setLoading(true)
    updateUser(user)
      .then(() => {
      dispatch(createToggleModalAction(EditUserModalIdentifier));
      setLoading(false);
      update();
    })
      .catch(err => {
        dispatch(showAlert('Algo salio mal'))
        dispatch(createToggleModalAction(EditUserModalIdentifier));
        setLoading(false);
        console.log(err)
      });
  };

  return <div>
    <Modal modalId={EditUserModalIdentifier}>
      {loading && <Spinner text={"Cambiando..."} />}
      {!loading && <UserForm onSubmit={handleSubmit} user={editingUser}/>}
    </Modal>
  </div>
})

