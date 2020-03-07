import React from 'react'
import './Input.css'

interface Props {
  placeholder: string
  initialValue: string | undefined
}
//todo add validation to inputs
export const Input = React.forwardRef<HTMLInputElement, Props>(({placeholder, initialValue}, ref) => {
  return <input defaultValue={initialValue || ''} ref={ref} placeholder={placeholder}/>
})