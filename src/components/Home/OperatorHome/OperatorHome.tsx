import React from "react";
import "./OperatorHome.scss";
import { PreCallScreen } from '../../PreCallScreen/PreCallScreen'
import { useConnect } from '../../Utils/useConnect'
import { CallScreen } from '../../CallScreen/CallScreen'

interface Props {}

export const OperatorHome: React.FC<Props> = useConnect(({state}) => {
  const { isCalling } = state

  return (
    <div className={'operator-home-container'}>
      { isCalling?  <CallScreen/>:<PreCallScreen/>}
    </div>
    )
})