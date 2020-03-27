import React from 'react'
import './CallCenterItem.scss'
import { CallCenter } from '../../../../types/UserModel'

interface Props {
  callcenter: CallCenter
  spaced: boolean
}

export const CallCenterItem: React.FC<Props> = ({callcenter, spaced}) => {

  const parseClassName = (): string => 'callcenter-item' + (spaced? ' space-bottom' : '')

  return <div className={parseClassName()}>
      <div>{callcenter.name}</div>
      <div>{callcenter.code}</div>
    </div>
}