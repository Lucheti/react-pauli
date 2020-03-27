import React from "react";
import { useConnect } from "../Utils/useConnect";
import { changeInput } from "../../Actions/FormActions";
import "./Form.scss";

interface Props {
    onSubmit: (username: string, password: string) => void
}

export const LoginForm: React.FC<Props> = useConnect(({ dispatch, state, onSubmit }) => {
  const { forms } = state;
  const formData = forms[LoginFormId]

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(changeInput(LoginFormId, target.name, target.value));
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(formData.username, formData.password)
  };

  return (
    <div className={'form-container'}>
      <form onSubmit={handleSubmit}>
        <div className={"input-container"}>
          <input
            className={"formInput"}
            name={"username"}
            placeholder={"Usuario"}
            onChange={handleChange}
          />
        </div>
        <div className={"input-container"}>
          <input
            className={"formInput"}
            type={'password'}
            name={"password"}
            placeholder={"Contraseña"}
            onChange={handleChange}
          />
        </div>
        <input type={"submit"} value={"Entrar"} />
      </form>
    </div>
  );
});

export const LoginFormId = "LOGIN_FORM_ID_";
