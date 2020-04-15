import React from 'react'

interface Props {
  errorMessage: string,
  isValid: boolean,
  handleChange: (name: string, value: string) => void
  name: string
}

export const Input: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({errorMessage, isValid, handleChange, name,...props}) => {
    const [dirty, setDirty] = React.useState(false)

    React.useEffect(() => {
      props.defaultValue && handleChange(name, `${props.defaultValue}`)
    },[props.defaultValue])

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setDirty(true)
      handleChange(name, evt.target.value)
    }

    return (
      <div className={"input-container"}>
        {dirty && !isValid && <p className={'error'}> {errorMessage} </p>}
        <input
          {...props}
          className={"formInput " + (props.className || "")}
          onChange={ onChange }
        />
      </div>
    )
}