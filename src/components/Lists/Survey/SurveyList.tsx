import React from 'react'
import { WrappedPromise } from '../../../requests/Suspense'
import { Survey } from '../../../types/Survey'
import { useResource } from '../../Utils/CustomHooks'
import { SurveyListItem } from './SurveyListItem/SurveyListItem'

interface Props {
  resource: WrappedPromise<Survey[]>
}

export const SurveyList: React.FC<Props> = ({resource}) => {

    const [surveys] = useResource<Survey[]>(resource)

    return <div>
      {surveys && surveys.length > 0 && surveys.map( survey => <SurveyListItem survey={survey}/>)}
    </div>
} 