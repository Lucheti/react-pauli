import React, { HTMLAttributes } from "react";
import { Ref, useInput } from "../Utils/CustomHooks";
import "./Form.scss";
import { userModelInputs, UserModelKeys } from "../../types/UserModel";

export interface FormProps {
  title: string;
  buttonText: string;
  inputList: UserModelKeys[];
  handleSubmit: (...values: string[]) => void;
  initialValues?: any;
}

export interface FormAction {
  name: string;
  status: boolean;
}

const FormReducer = (state: any, action: FormAction) => {
  const newState = { ...state, [action.name]: action.status };
  const isValid = () =>
    Object.keys(newState)
      .filter(key => key !== "hasErrors")
      .reduce((acc, key) => acc && newState[key], true);

  return { ...newState, hasErrors: !isValid() };
};

type Props = FormProps & HTMLAttributes<HTMLDivElement>;

export const Form: React.FC<Props> = ({
  title,
  inputList,
  handleSubmit,
  buttonText,
  initialValues,
  ...props
}) => {
  const inputs: Ref[] = inputList.map(useInput);
  const [state, dispatch] = React.useReducer(FormReducer, { hasErrors: false });

  const submit = (evt: React.FormEvent): void => {
    evt.preventDefault();
    const values = inputs.map(ref => ref.value);
    handleSubmit(...values);
  };

  return (
    <div {...props} className={"form"}>
      <header> {title} </header>
      <form onSubmit={submit}>
        {inputList.map((key, index) =>
          userModelInputs.get(key)!({
            dispatch: dispatch,
            initialValue: initialValues && initialValues[key],
            ref: inputs[index].ref
          })
        )}
        <input
          className={"submitter"}
          type={"submit"}
          disabled={state.hasErrors}
          onClick={submit}
          value={buttonText}
          onSubmit={console.log}
        />
      </form>
    </div>
  );
};

export const formIdentifier = "form";
