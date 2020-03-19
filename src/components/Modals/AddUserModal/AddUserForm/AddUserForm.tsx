import React from 'react'
import './AddUserForm.sass'
import { createToggleModalAction } from '../../../../Actions/ModalActions'
import { Form } from '../../../Form/Form'
import { useConnect } from '../../../Utils/useConnect'
import { addUser } from '../../../../requests/Requests'
import { ModelPageContext } from '../../../Home/ModelPage/ModelPage'
import { createUserModelKeys } from '../../../../types/UserModel'

interface Props {
  modalId: string
}

export const AddUserForm: React.FC<Props> = useConnect(({modalId, dispatch}) => {

    const {role, update} = React.useContext(ModelPageContext)

    const onSubmit = (...data: string[]) => {
      dispatch(createToggleModalAction(modalId))
      addUser(role, ...data)
        .then(() => update())
    }

    return (
      <div>
        <Form
          buttonText={"Agregar"}
          inputList={createUserModelKeys}
          handleSubmit={ onSubmit }
          title={'Agregar usuario'}
        />
      </div>
    );
})