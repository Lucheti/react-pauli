import React from 'react'
import { AppReducerAction } from '../../reducers/AppReducer'

export const TOGGLE_NAVBAR = 'toggle navbar'
export const TOGGLE_NAVBAR_ACTION = { type: TOGGLE_NAVBAR }
export const CHANGE_COMPONENT = 'change component'
export const CHANGE_COMPONENT_ACTION = (component: React.FC): AppReducerAction => ({ type: CHANGE_COMPONENT, payload: component })


