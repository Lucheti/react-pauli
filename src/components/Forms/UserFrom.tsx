import React from "react";
import { useConnect } from "../Utils/useConnect";
import { changeInput } from "../../Actions/FornActions";
import "./Form.scss";
import { Input } from "./Input/Input";
import {
  defaultErrormessage,
  defaultInputValidator,
  mailErrorMessage,
  mailValidator,
  passwordErrorMessage,
  passwordValidator
} from "../Utils/InputValidators";
import { InputOption, Select } from "./Select/Select";
import { getCallcenters } from "../../requests/Requests";
import { UserModel } from '../../types/UserModel'
import { Role } from '../Enums/Role'

interface Props {
  onSubmit: (user: UserModel) => void;
  user?: UserModel
}

export const UserForm: React.FC<Props> = useConnect(
  ({ dispatch, state, onSubmit, user }) => {
    const { forms } = state;
    const formData = forms[addUserForm];
    const {
      username,
      password,
      dni,
      name,
      lastName,
      mail,
      phone,
      callCenter
    } = formData;

    const handleChange = (name: string, value: string) =>
      dispatch(changeInput(addUserForm, name, value));

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      onSubmit( new UserModel(
        name,
        lastName,
        dni,
        mail,
        phone,
        username,
        Role.OPERATOR,
        state?.editingUser.id,
        password,
        {
          id: callCenter
        }
      ));
    };

    const [callcenters, setCallcenters] = React.useState<InputOption[]>([]);
    React.useEffect(() => {
      getCallcenters().then(data =>
        setCallcenters(
          data.map<InputOption>(callcenter => ({
            label: callcenter.name!,
            value: callcenter.id!
          }))
        )
      );
    }, []);

    const formValid = () =>
      defaultInputValidator(username) &&
      passwordValidator(password) &&
      defaultInputValidator(dni) &&
      defaultInputValidator(name) &&
      defaultInputValidator(lastName) &&
      mailValidator(mail) &&
      defaultInputValidator(phone) &&
      defaultInputValidator(callCenter)

    return (
      <div className={"form-container"}>
        <form onSubmit={handleSubmit} className={"form"}>
          <Input
            className={"formInput"}
            name={"username"}
            placeholder={"Usuario"}
            handleChange={handleChange}
            isValid={defaultInputValidator(username)}
            errorMessage={defaultErrormessage}
            defaultValue={user?.username}
          />
          {!user && <Input
            className={"formInput"}
            type={"password"}
            name={"password"}
            placeholder={"Contraseña"}
            handleChange={handleChange}
            isValid={passwordValidator(password)}
            errorMessage={passwordErrorMessage}
          />}
          <Input
            className={"formInput"}
            name={"dni"}
            type={"number"}
            placeholder={"Dni"}
            handleChange={handleChange}
            isValid={defaultInputValidator(dni)}
            errorMessage={defaultErrormessage}
            defaultValue={user?.dni}
          />
          <Input
            className={"formInput"}
            name={"name"}
            placeholder={"Nombre"}
            handleChange={handleChange}
            isValid={defaultInputValidator(name)}
            errorMessage={defaultErrormessage}
            defaultValue={user?.name}
          />
          <Input
            className={"formInput"}
            name={"lastName"}
            placeholder={"Apellido"}
            handleChange={handleChange}
            isValid={defaultInputValidator(lastName)}
            errorMessage={defaultErrormessage}
            defaultValue={user?.lastName}
          />
          <Input
            className={"formInput"}
            name={"mail"}
            type={"email"}
            placeholder={"Email"}
            handleChange={handleChange}
            isValid={mailValidator(mail)}
            errorMessage={mailErrorMessage}
            defaultValue={user?.mail}
          />
          <Input
            className={"formInput"}
            name={"phone"}
            placeholder={"Telefono"}
            handleChange={handleChange}
            isValid={defaultInputValidator(phone)}
            errorMessage={defaultErrormessage}
            defaultValue={user?.phone}
          />
          <Select
            className={"formInput"}
            name={"callCenter"}
            placeholder={"Callcenter"}
            handleChange={handleChange}
            isValid={defaultInputValidator(callCenter)}
            errorMessage={defaultErrormessage}
            data={callcenters}
            defaultValue={user?.callCenter.name}
          />

          <input type={"submit"} value={"Entrar"} disabled={ false }/>
        </form>
      </div>
    );
  }
);

export const addUserForm = "ADD_USER_FORM_ID_";
