import React, { CSSProperties } from 'react'
import './SurveyStageButton.scss'
import { NameField, QuotasField, SelectedDatabaseField, SelectedOperatorsField, SurveyFormId } from '../Constants'
import { SurveyFormState, SurveyStage, SurveyStages } from '../../../../../States/FormStates/SurveyFormState'
import { useConnect } from '../../../../Utils/useConnect'
import { changeSurveyStage } from '../../../../../Actions/SurveyStageActions'
import { createSurvey } from '../../../../../requests/Requests'
import { NewSurvey } from '../../../../../types/NewSurvey'

interface Props {
  next?: boolean
  prev?: boolean
}

export const SurveyStageButton: React.FC<Props> = useConnect(({next, prev, state, dispatch}) => {
  const { forms } = state
  const surveyFormState = forms[SurveyFormId]
  const { stage } = surveyFormState

  const handleChangeStage = (stage: SurveyStage): void => dispatch(changeSurveyStage( stage ))

  const stageIndex = SurveyStages.indexOf(stage)
  const prevStage = SurveyStages[stageIndex - 1]
  const nextStage = SurveyStages[stageIndex + 1]

  const prevButton = () => <ChangeStageButton onClick={ () => handleChangeStage(prevStage) } text={'Atras'} />
  const nextButton = () => <ChangeStageButton onClick={ () => handleChangeStage(nextStage) } text={'Seguir'} next />
  console.log("NEXT" + next)

  if (next && stageIndex === SurveyStages.length - 1) return <SubmitButton surveyFormState={surveyFormState}/>
  if (next && stageIndex < SurveyStages.length - 1) return nextButton()
  if (prev && stageIndex > 0) return prevButton()
  return null
})

const nextStepStyle: CSSProperties = {
  right: '1.5rem',
  borderBottomRightRadius: '50%',
  borderTopRightRadius: '50%',
}

const prevStepStyle: CSSProperties = {
  left: '1.5rem',
  borderBottomLeftRadius: '50%',
  borderTopLeftRadius: '50%',
}

interface NextButtonProps {
  text: string
  onClick: () => void
  next?: boolean
}
const ChangeStageButton: React.FC<NextButtonProps> = ({ text, onClick, next }) =>
  <button className={'survey-button'} onClick={ onClick } style={ next? nextStepStyle : prevStepStyle}> {text}</button>

const SubmitButton: React.FC<{surveyFormState: SurveyFormState}> = ({surveyFormState}) => {

  const newSurvey: NewSurvey = {
    name: surveyFormState[NameField],
    operatorsId: surveyFormState[SelectedOperatorsField].map( user => user.id),
    phoneDatabaseId: surveyFormState[SelectedDatabaseField].id,
    quotas: surveyFormState[QuotasField]
  }

  return <ChangeStageButton onClick={ () => {
    createSurvey( newSurvey )
  }} text={'Enviar'} next/>
}