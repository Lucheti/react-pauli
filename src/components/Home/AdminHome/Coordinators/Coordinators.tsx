import { getUserByRole } from '../../../../requests/Requests'
import { Role } from '../../../Enums/Role'
import ModelPage from '../../ModelPage/ModelPage'
import React from 'react'
import { useConnect } from '../../../Utils/useConnect'

export const Coordinator = useConnect(({state}) => {

  const { openTab } = state

  if(openTab.identifier === CoordinatorsPageId) return <ModelPage title={'Coordinadores'} fetcher={  getUserByRole } role={Role.COORDINATOR}/>
  else return null
})

export const CoordinatorsPageId = 'coordinators-page'