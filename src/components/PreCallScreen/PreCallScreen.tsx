import React from 'react'
import { useMoreInfo } from '../Utils/StyleHooks'
import { useBoolean } from '../Utils/CustomHooks'
import './PreCallScreen.scss'
import { useConnect } from '../Utils/useConnect'
import { toggleCalling } from '../../Actions/OperatorActions'

interface Props {
}

export const PreCallScreen: React.FC<Props> = useConnect<Props>(({dispatch, state}) => {

    return (
      <div className={'pre-call-screen'}>
        <Dropdown options={['campo1']}/>
        <button className={"start"} onClick={() => dispatch(toggleCalling())}> Iniciar </button>
      </div>
    );
})

interface DropdownProps {
  options: any[]
}

const Dropdown: React.FC<DropdownProps> = ({options}) => {
  const [boolean, toggle] = useBoolean()
  return(
    <div className={"dropdown-container"}>
      <input list={'options'} onClick={toggle} placeholder={'Seleccionar Campo'}/>
      <datalist id={'options'} style={useMoreInfo(boolean)}>
        {options.map( (value) => <option value={value}/>)}
      </datalist>
    </div>
  )
}