import React from 'react'
// import './SurveyListItem.css'
import { Survey } from '../../../../types/Survey'

interface Props {
  survey: Survey
}

export const SurveyListItem: React.FC<Props> = ({survey}) => {

    return <div>
      <p> Nombre: {survey.name} </p>
      <p> Base telefonica: {survey.database.name}</p>
      <p> Operadores asignados: {survey.operator.reduce( (acc) => acc + 1, 1)}</p>
      <p> Quotas completadas: {survey.quotas.reduce( (acc) => acc + 1, 1)}</p>
    </div>
}