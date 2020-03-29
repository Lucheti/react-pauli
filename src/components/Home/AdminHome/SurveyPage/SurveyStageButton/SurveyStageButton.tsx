import React from 'react'
import './SurveyStageButton.scss'
import { SurveyFormId } from '../Constants'
import { SurveyStage, SurveyStages } from '../../../../../States/FormStates/SurveyFormState'
import { useConnect } from '../../../../Utils/useConnect'
import { changeSurveyStage } from '../../../../../Actions/SurveyStageActions'

interface Props {}

export const SurveyStageButton: React.FC<Props> = useConnect(({state, dispatch}) => {
  const { forms } = state
  const { stage } = forms[SurveyFormId]

  const handleChangeStage = (stage: SurveyStage): void => dispatch(changeSurveyStage( stage ))

  const stageIndex = SurveyStages.indexOf(stage)
  const prevStage = SurveyStages[stageIndex - 1]
  const nextStage = SurveyStages[stageIndex + 1]

  if (stageIndex === 0)
    return <ChangeStageButton onClick={ () => handleChangeStage(nextStage) } stageToGo={ nextStage } text={'Proceder a'} />
  // if (stageIndex === SurveyStages.length - 1) return (
  //   <PreviouseButton nextStage={stage} />
  //   <SubmitButton/>
  // )

  return (
    <>
      <ChangeStageButton onClick={ () => handleChangeStage(prevStage) } stageToGo={ prevStage } text={'Volver a'} />
      <ChangeStageButton onClick={ () => handleChangeStage(nextStage) } stageToGo={nextStage} text={'Proceder a'} />
      </>
  )
})

interface NextButtonProps {
  stageToGo: SurveyStage
  text: string
  onClick: () => void
}
const ChangeStageButton: React.FC<NextButtonProps> = ({ stageToGo, text, onClick }) =>
  <button className={'survey-button'} onClick={ onClick }> {text} {' '} {stageToGo}</button>