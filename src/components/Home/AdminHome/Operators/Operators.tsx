import { getUserByRole } from '../../../../requests/Requests'
import { Role } from '../../../Enums/Role'
import ModelPage from '../../ModelPage/ModelPage'
import React from 'react'
import { useConnect } from '../../../Utils/useConnect'

export const Operators = useConnect(({state}) => {
  const {openTab} = state

  if(openTab.identifier === OperatorsPageId) return <ModelPage title={'Operadores'} fetcher={ getUserByRole } role={Role.OPERATOR}/>
  else return null
})

export const OperatorsPageId = 'operators-page'