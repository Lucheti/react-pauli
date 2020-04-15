import React from 'react'
import './CallCenterItem.scss'
import { CallCenter } from '../../../../types/UserModel'
import { useConnect } from '../../../Utils/useConnect'
import { createToggleModalAction } from '../../../../Actions/ModalActions'
import { EditCallcenterModalId } from '../../../Modals/constants'

interface Props {
  callcenter: CallCenter
  spaced: boolean
}

export const CallCenterItem: React.FC<Props> = useConnect(({callcenter, spaced, dispatch}) => {

  const parseClassName = (): string => 'callcenter-item' + (spaced? ' space-bottom' : '')

  return <div className={parseClassName()} onClick={() => dispatch(createToggleModalAction<CallCenter>(EditCallcenterModalId, callcenter))}>
      <div>{callcenter.name}</div>
      <div>{callcenter.code}</div>
    </div>
})