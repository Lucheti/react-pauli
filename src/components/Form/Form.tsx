import React, { HTMLAttributes } from 'react'
import { Input } from './Input/Input'
import { Ref, useInput } from '../Utils/CustomHooks'
import './Form.scss'

export interface FormProps {
  title: string;
  buttonText: string;
  inputList: string[];
  handleSubmit: (...values: string[]) => void;
  initialValues?: any;
  inputTypes?: string[];
  validators: Map<string, (value: string) => [boolean, string] >
}

export interface FormAction {
  name: string,
  status: boolean
}

const FormReducer = (state: any, action: FormAction) => {
  const newState = {...state, [action.name]: action.status}
  const isValid = () =>
    Object.keys(newState)
      .filter( key => key !== 'hasErrors')
        .reduce( (acc, key) => acc && newState[key], true)

  return {...newState, hasErrors: !isValid()}
}

type Props = FormProps & HTMLAttributes<HTMLDivElement>;

export const Form : React.FC<Props> = ({
  title,
  inputList,
  handleSubmit,
  buttonText,
  initialValues,
  inputTypes,
  validators,
  ...props
}) => {

  const inputs: Ref[] = inputList.map(useInput);
  const [state, dispatch] = React.useReducer(FormReducer, {hasErrors: false})

  const submit = (evt: React.FormEvent ): void => {
    evt.preventDefault()
    const values = inputs.map(ref => ref.value);
    handleSubmit(...values);
  };

  return (
    <div {...props} className={"form"}>
      <header> {title} </header>
      <form onSubmit={ submit }>
      {inputList.map((inputName, index) => (
        <Input
          initialValue={initialValues && initialValues[inputName]}
          name={inputName}
          key={index}
          ref={inputs[index].ref}
          dispatch={dispatch}
          isValid={validators.get(inputName)!}
          type={inputTypes? inputTypes[index] : "text"}
        />
      ))}
      <input
        className={'submitter'}
        type={'submit'}
        // disabled={state.hasErrors}
        onClick={ submit }
        value={buttonText}
        onSubmit={ console.log }
        />
      </form>
    </div>
  );
};

export const formIdentifier = 'form'
