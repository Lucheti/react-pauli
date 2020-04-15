import React from 'react'
import './Form.scss'
import { useConnect } from '../Utils/useConnect'
import { CallCenter } from '../../types/UserModel'
import { changeInput } from '../../Actions/FormActions'
import { AddCallCenterFormId } from './constants'
import { defaultErrormessage, defaultInputValidator, mailValidator, passwordValidator } from '../Utils/InputValidators'
import { Input } from './Input/Input'

interface Props {
    onSubmit: (callCenter: CallCenter) => void;
    callCenter?: CallCenter
}

export const CallCenterForm: React.FC<Props> = useConnect(({onSubmit, callCenter, state, dispatch}) => {

    const { forms } = state;
    const formData = forms[AddCallCenterFormId];
    const { code, name} = formData

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onSubmit({code, name})
    };

    const handleChange = (name: string, value: string) =>
      dispatch(changeInput(AddCallCenterFormId, name, value));

    const formValid = () =>
      defaultInputValidator(name) &&
      defaultInputValidator(code)


    return (
      <div className={"form-container"}>
          <form onSubmit={ handleSubmit } className={"form"}>
              <Input
                className={"formInput"}
                name={"name"}
                placeholder={"Nombre"}
                handleChange={handleChange}
                isValid={defaultInputValidator(name)}
                errorMessage={defaultErrormessage}
                defaultValue={callCenter?.name}
              />
              <Input
                className={"formInput"}
                name={"code"}
                placeholder={"Codigo"}
                handleChange={handleChange}
                isValid={defaultInputValidator(code)}
                errorMessage={defaultErrormessage}
                defaultValue={callCenter?.code}
              />
              <input type={"submit"} value={"Agregar"} disabled={ false }/>
          </form>
      </div>
    )
} )