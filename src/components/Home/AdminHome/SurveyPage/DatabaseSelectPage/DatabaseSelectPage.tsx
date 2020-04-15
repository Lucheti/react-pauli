import React, { Suspense } from 'react'
import { useGetResource } from '../../../../Utils/CustomHooks'
import { getDatabases } from '../../../../../requests/Requests'
import { DatabaseList } from '../../../../Lists/Database/DatabaseList/DatabaseList'
import { Database } from '../../../../../types/Database'
import { Title } from '../../../../Title/Title'
import { SurveyStageButton } from '../SurveyStageButton/SurveyStageButton'
import { Spinner } from '../../../../Spinner/Spinner'
import { DatabaseSelectPageId } from '../Constants'
import { SurveyStage } from '../../../../../States/FormStates/SurveyFormState'

interface Props {
    stage: SurveyStage;
}

export const DatabaseSelectPage: React.FC<Props> = ({stage}) => {
    const resource = useGetResource<Database[]>( getDatabases );

    if (stage !== DatabaseSelectPageId) return null
    
    return (
      <div>
          <Title title={"Seleccion de bases de datos"} />
          <Suspense fallback={<Spinner />}>
             <DatabaseList resource={resource} />
          </Suspense>
      </div>
    );
}

