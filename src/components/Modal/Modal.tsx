import React from 'react'
import './Modal.scss'
import { createToggleModalAction } from '../../Actions/ModalActions'
import { useConnect } from '../Utils/useConnect'
import { ModalIdentifier } from '../../types/ModalIdentifier'

interface Props {
  modalId: ModalIdentifier
}

export const Modal: React.FC<Props> = useConnect(({modalId, children, state, dispatch}) => {

    const {modals} = state
    const visible = () => modals[modalId].isOpen

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