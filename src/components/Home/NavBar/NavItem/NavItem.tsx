import React from 'react'
import './NavItem.scss'
import { AppReducerAction } from '../../../../reducers/AppReducer'
import { useConnect } from '../../../Utils/useConnect'

interface Props {
  text: string,
  action?: AppReducerAction
}

export const NavItem: React.FC<Props> = useConnect(({text, action, dispatch}) => {
  return <li className='item' onClick={() => action && dispatch(action)}> {text} </li>
})