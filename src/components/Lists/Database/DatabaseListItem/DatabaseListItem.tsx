import React from 'react'
import './DatabaseListItem.scss'
import { useConnect } from '../../../Utils/useConnect'
import { Database } from '../../../../types/Database'
import { SelectedDatabaseField, SurveyFormId } from '../../../Home/AdminHome/SurveyPage/Constants'
import { changeInput } from '../../../../Actions/FormActions'


interface Props {
  database: Database
}

export const DatabaseListItem: React.FC<Props> = useConnect(({database, dispatch, state}) => {
    const selectedDatabase: Database = state.forms[SurveyFormId][SelectedDatabaseField]

    const isSelected = () => selectedDatabase.id === database.id
    const handleClick = () => dispatch(changeInput(SurveyFormId,SelectedDatabaseField, database))

    return (
      <div className={'database-item ' + (isSelected()? 'selected' : '') } onClick={ handleClick }>
        <p>{database.name}</p>
      </div>
    )
})