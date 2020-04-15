import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Operators } from './Operators/Operators'
import { Coordinator } from './Coordinators/Coordinators'
import { DatabasePage } from './Databases/DatabasePage'
import { SurveyPage } from './SurveyPage/SurveyPage'
import { Callcenters } from './Callcenters/Callcenters'

interface Props {

}

export const AdminHome: React.FC<Props> = () => {

    return (
    <div>
      <NavBar/>
      <Operators/>
      <Coordinator/>
      <DatabasePage/>
      <Callcenters/>
      <SurveyPage/>
    </div>
    )
}