import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Operators } from './Operators/Operators'
import { Coordinator } from './Coordinators/Coordinators'
import { DatabaseLoader } from '../DatabaseLoader'

interface Props {

}

export const AdminHome: React.FC<Props> = () => {

    return (
    <div>
      <NavBar/>
      <Operators/>
      <Coordinator/>
      <DatabaseLoader/>
    </div>
    )
}