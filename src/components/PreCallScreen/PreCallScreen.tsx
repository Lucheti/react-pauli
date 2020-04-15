import React, { Suspense } from 'react'
import { useMoreInfo } from '../Utils/StyleHooks'
import { useBoolean, useGetResource } from '../Utils/CustomHooks'
import './PreCallScreen.scss'
import { useConnect } from '../Utils/useConnect'
import { setSurvey, toggleCalling } from '../../Actions/OperatorActions'
import { getMySurveys } from '../../requests/Requests'
import { WrappedPromise } from '../../requests/Suspense'
import { Survey } from '../../types/Survey'
import { Spinner } from '../Spinner/Spinner'
import { OperatorPageId } from '../Home/OperatorHome/Constants'

interface Props {
}

export const PreCallScreen: React.FC<Props> = useConnect<Props>(({dispatch, state}) => {

  const { isCalling } = state[OperatorPageId]

  if(isCalling) return null

  const resource = useGetResource(getMySurveys)
  return (
    <div className={'pre-call-screen'}>
      <h1> Pauli </h1>
      <Suspense fallback={<Spinner/>}>
        <SurveyDropdown resource={resource}/>
      </Suspense>
      <button className={"start"} onClick={() => dispatch(toggleCalling())}> Iniciar</button>
    </div>
  );
})

interface DropdownProps {
  resource: WrappedPromise<Survey[]>
}

const SurveyDropdown: React.FC<DropdownProps> = useConnect(({resource, dispatch}) => {
  const [boolean, toggle] = useBoolean()

  const data = resource.data.read()
  const handleInputChange = (surveyName: string) => {
    if (data){
      const survey: Survey | undefined = data.find( survey => survey.name === surveyName)
      survey && dispatch(setSurvey(survey))
    }
  }

  return(
    <div className={"dropdown-container"}>
      <input list={'options'} onClick={toggle} placeholder={'Seleccionar Campo'} onChange={ evt => handleInputChange(evt.target.value) }/>
      <datalist id={'options'} style={useMoreInfo(boolean)}>
        {data && data.map( (survey) => <option value={survey.name}/>)}
      </datalist>
    </div>
  )
})