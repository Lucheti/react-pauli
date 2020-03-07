import React, { HTMLAttributes } from 'react'
import { Input } from './Input/Input'
import { Ref, useInput } from '../Utils/CustomHooks'
import './Form.scss'

interface FormProps {
  title?: string;
  buttonText: string
  inputList: string[];
  onSubmit: (...values: (string | undefined)[]) => void
}

type Props = FormProps & HTMLAttributes<HTMLDivElement>

export const Form: React.FC<Props> = ({title, inputList, onSubmit, buttonText, ...props}) => {

  if (!inputList) return null

  const refs: Ref[] = inputList.map( useInput )

  const submit = () => {
    const values = refs.map(ref => ref.value)
    onSubmit(...values)
  }

  return (
    <div {...props} className={'form'}>
      {title && <header> {title} </header>}
      {inputList.map((inputName, index) => <Input placeholder={inputName} key={index} ref={refs[index].ref!}/>)}
      <button onClick={submit}>{buttonText}</button>
    </div>
  )
}