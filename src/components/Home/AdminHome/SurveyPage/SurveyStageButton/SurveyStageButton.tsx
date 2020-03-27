import React from 'react'
import './SurveyStageButton.scss'
import { SurveyFormId } from '../Constants'
import { SurveyStage, SurveyStages } from '../../../../../States/FormStates/SurveyFormState'
import { useConnect } from '../../../../Utils/useConnect'

interface Props {

}



export const SurveyStageButton: React.FC<Props> = useConnect(({state, dispatch}) => {
  const { forms } = state
  const { stage } = forms[SurveyFormId]

  const stageIndex = SurveyStages.indexOf(stage)


  if (stageIndex === 0) return <ChangeStageButton stageToGo={stage} text={'Proceder a'} />
  // if (stageIndex === SurveyStages.length - 1) return (
  //   <PreviouseButton nextStage={stage} />
  //   <SubmitButton/>
  // )
  return (
    <>
      <ChangeStageButton stageToGo={SurveyStages[stageIndex + 1]} text={'Proceder a'} />
      <ChangeStageButton stageToGo={SurveyStages[stageIndex - 1]} text={'Volver a'} />
      </>
  )
})

interface NextButtonProps {
  stageToGo: SurveyStage
  text: string
}
const ChangeStageButton: React.FC<NextButtonProps> = ({ stageToGo, text }) => <button className={'survey-button'}> {text} {' '} {stageToGo}</button>