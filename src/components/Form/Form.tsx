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
  inputTypes?: string[]
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
  ...props
}) => {

  const inputs: Ref[] = inputList.map(useInput);
  const [state, dispatch] = React.useReducer(FormReducer, {hasErrors: false})

  const submit = (): void => {
    const values = inputs.map(ref => ref.value);
    handleSubmit(...values);
  };

  React.useEffect(() => console.log(inputList, initialValues),[])

  return (
    <div {...props} className={"form"}>
      <header> {title} </header>
      {inputList.map((inputName, index) => (
        <Input
          initialValue={initialValues && initialValues[inputName]}
          name={inputName}
          key={index}
          ref={inputs[index].ref}
          dispatch={dispatch}
          isValid={state[inputName]}
          type={inputTypes? inputTypes[index] : "text"}
        />
      ))}
      <button
        disabled={state.hasErrors}
        onClick={ submit }>
        {buttonText}
      </button>
    </div>
  );
};

export const formIdentifier = 'form'
