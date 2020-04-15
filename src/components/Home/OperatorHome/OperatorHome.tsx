import React from 'react'
import './OperatorHome.scss'
import { PreCallScreen } from '../../PreCallScreen/PreCallScreen'
import { useConnect } from '../../Utils/useConnect'
import { CallScreen } from '../../CallScreen/CallScreen'
import { OperatorPageId } from './Constants'
import { useGetResource } from '../../Utils/CustomHooks'
import { getCurrentCall } from '../../../requests/Requests'
import { setCall, setSurvey, toggleCalling } from '../../../Actions/OperatorActions'

interface Props {}

export const OperatorHome: React.FC<Props> = useConnect(({state, dispatch}) => {
  const { currentCall } = state[OperatorPageId]

  if(!currentCall) {
    const currentCallResource = useGetResource(getCurrentCall)
    const call = currentCallResource.data.read()
    if (call) {
      dispatch(setCall(call))
      dispatch(setSurvey(call.survey))
      dispatch(toggleCalling())
    }
  }

  return (
    <div className={'operator-home-container'}>
      <CallScreen/>
      <PreCallScreen/>
    </div>
    )
})