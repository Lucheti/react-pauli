import React from 'react'
import './Toggler.css'
import { toggleNavbar } from '../../../../Actions/NavBarActions'
import { useConnect } from '../../../Utils/useConnect'

interface Props {}

export const Toggler: React.FC<Props> = useConnect(({dispatch}) => {

    return (
      <div className={'toggler'} onClick={() => dispatch(toggleNavbar())}>
        |||
      </div>
    )
})