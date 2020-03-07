import React from 'react'
import './AddUserForm.sass'
import { useConnect } from '../../../../Utils/Connect'
import { createToggleModalAction } from '../../../../Actions/ModalActions'
import { userModelKeys } from '../../../../../Types/UserModel'
import { Form } from '../../../../Form/Form'


interface Props {
  modalId?: string
}

export const AddUserForm: React.FC<Props> = ({modalId}) => {

  const [,dispatch] = useConnect()

    const onSubmit = (...data: string[]) => {
      modalId && dispatch(createToggleModalAction(modalId))
      console.log(data)
    }

    return (
      <div>
        <Form
          buttonText={"Agregar"}
          inputList={userModelKeys( true )}
          handleSubmit={ onSubmit }
          title={'Agregar usuario'}
        />
      </div>
    );
}