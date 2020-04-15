import React from 'react'
import './CallScreen.scss'
import { Selection } from './Cuotas/Selection'
import { useConnect } from '../Utils/useConnect'
import { OperatorPageId } from '../Home/OperatorHome/Constants'
import { useGetResource } from '../Utils/CustomHooks'
import { getNextNumber } from '../../requests/Requests'
import { setCall } from '../../Actions/OperatorActions'

interface Props {

}

export const CallScreen: React.FC<Props> = useConnect(({state, dispatch}) => {
    const { isCalling, currentCall } = state[OperatorPageId]

    if (!isCalling) return null

    const { selectedSurvey } = state[OperatorPageId]

    if(!currentCall) {
        const nextNumberResource = useGetResource(() => getNextNumber(selectedSurvey.id))
        const nextNumber = nextNumberResource.data.read()

        if (nextNumber) {
            dispatch(setCall({phone: nextNumber.phone, survey: selectedSurvey}))
        }
    }

    if (!currentCall) return null

    const quota = currentCall?.survey?.quotas?.find(quota => quota.town.id === currentCall.phone.town.id)
    const segments = quota?.values.map( segment => segment.segment)
    const phone = currentCall?.phone?.phone

    if(!quota || !segments || !phone) return <h4 className={'error'}>Ops... Algo salio mal</h4>

    return (
      <div className={'callscreen-container'}>
          <Selection data={segments} onChange={(value) => dispatch(setCall({...currentCall, segment: value}))}/>
          <PhoneNumber phone={phone}/>
          <Selection data={[]} onChange={(value) => dispatch(setCall({...currentCall, callState: value}))}/>
      </div>
    );
})

interface NumberProps {
    phone: string
}

const PhoneNumber: React.FC<NumberProps> = ({phone}) => {

    if (!phone) return <div> <p> No hemos encontrado otro telefono para llamar</p> </div>
    return <div className={'phone'}> <p>{phone}</p> </div>
}