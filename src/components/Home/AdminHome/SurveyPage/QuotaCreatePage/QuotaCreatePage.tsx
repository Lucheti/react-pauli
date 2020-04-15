import React, { Suspense } from 'react'
import { QuotaCreatePageId, QuotasField, SurveyFormId } from '../Constants'
import { Title } from '../../../../Title/Title'
import { SurveyStageButton } from '../SurveyStageButton/SurveyStageButton'
import { Spinner } from '../../../../Spinner/Spinner'
import { SurveyStage } from '../../../../../States/FormStates/SurveyFormState'
import './QuotaCreatePage.scss'
import { Quota } from './Quota/Quota'
import { useConnect } from '../../../../Utils/useConnect'
import { changeInput } from '../../../../../Actions/FormActions'
import { DefaultNewCuota, NewCuota } from '../../../../../types/Cuota'

interface Props {
  stage: SurveyStage;
}

export const QuotaCreatePage: React.FC<Props> = useConnect(({ stage, state, dispatch }) => {

  const { forms } = state
  const form = forms[SurveyFormId]
  const quotas = form[QuotasField]

  if (stage !== QuotaCreatePageId) return null;

  return (
    <div className={"cuota-page"}>
      <Title title={"Creación de quotas"}/>
      { quotas.map( (quota, index) => <Quota index={index} newQuota={quota}/>) }
      <button onClick={() => dispatch(changeInput(SurveyFormId, QuotasField, [...quotas, DefaultNewCuota]))}> Agregar quota </button>
    </div>
  );
});

