import React from 'react'
import './CallcenterList.scss'
import { WrappedPromise } from '../../../../requests/Suspense'
import { CallCenter } from '../../../../types/UserModel'
import { useResource } from '../../../Utils/CustomHooks'
import { CallCenterItem } from '../CallCenterItem/CallCenterItem'

interface Props {
    resource: WrappedPromise<CallCenter[]>
}

export const CallcenterList: React.FC<Props> = ({resource}) => {
    const [data, setData] = useResource(resource);

    return <div>
        {data.map( (callcenter, i) => <CallCenterItem callcenter={ callcenter } spaced={i !== data.length - 1}/>)}
    </div>
}