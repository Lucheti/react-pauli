import React from 'react'
import './Modal.scss'
import { createToggleModalAction } from '../Actions/ModalActions'
import { useConnect } from '../Utils/useConnect'

interface Props {
  modalId: string
}

export const Modal: React.FC<Props> = useConnect(({modalId, children, state, dispatch}) => {

    const {modals} = state
    const visible = () => modals[modalId]

    if(!visible()) return null

    return (
      <div>
        <div className={'background'} onClick={() => dispatch(createToggleModalAction(modalId))}/>
        <div className={'wrapper'}>
          <div className={'children-container'}>
          {children}
          </div>
        </div>
      </div>
    )
})