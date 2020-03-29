import React from 'react'
import './SurveyPage.scss'
import { OperatorSelectPage, OperatorSelectPageId } from './OperatorSelectPage/OperatorSelectPage'
import { SurveyStageButton } from './SurveyStageButton/SurveyStageButton'
import { SurveyFormId, SurveyPageId } from './Constants'
import { useConnect } from '../../../Utils/useConnect'
import { changeInput } from '../../../../Actions/FormActions'
import { Title } from '../../../Title/Title'
import { DatabaseSelectPage } from './DatabaseSelectPage/DatabaseSelectPage'

interface Props {

}

const changeSurveyStage = (id: string) => changeInput(SurveyFormId, 'stage', OperatorSelectPageId)

export const SurveyPage: React.FC<Props> = useConnect(({state, dispatch}) => {
  const { openTab, forms } = state;
  const formData = forms[SurveyFormId]
  const { stage } = formData

  if (openTab.identifier !== SurveyPageId) return null;

  React.useEffect(() => dispatch(changeSurveyStage(OperatorSelectPageId)),[])

    return (
      <div className={'surveyPage'}>
        <Title title={'Campos'}/>
        <OperatorSelectPage stage={ stage }>
          <SurveyStageButton/>
        </OperatorSelectPage>

        <DatabaseSelectPage stage={ stage }/>
      </div>
    );
})

