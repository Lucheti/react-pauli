import React from 'react'
import { createToggleModalAction } from '../../../Actions/ModalActions'
import { Form } from '../../../Form/Form'
import { UserModel, userModelKeys } from '../../../../types/UserModel'
import { useConnect } from '../../../Utils/useConnect'
import { ModelPageContext } from '../../../Home/ModelPage/ModelPage'
import { updateUser } from '../../../../requests/Requests'

interface Props {
  modalId: string;
}

export const EditUserForm: React.FC<Props> = useConnect<Props>(({ modalId, state, dispatch }) => {
  const {editingUser} = state;
  const {role, update} = React.useContext(ModelPageContext)


  const onSubmit = (...data: string[]) => {
    dispatch(createToggleModalAction(modalId));
    const fullUser = [
      ...data,
      editingUser.id
    ]
    userModelKeys.reduce( (acc , key, index) => ({...acc, [key]: fullUser[index]}), {})
    updateUser(...fullUser)
      .then(() => update())
  };

  return (
    <div>
      <Form
        buttonText={"Guardar"}
        inputList={userModelKeys}
        handleSubmit={onSubmit}
        title={"Editar usuario"}
        initialValues={editingUser}
      />
    </div>
  );
})
