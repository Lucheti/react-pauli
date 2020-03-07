import React from 'react'
import { Role } from './Enums/Role'

interface Props {

}

export const Home: React.FC<Props> = () => {

    const role = localStorage.getItem('role')

    if(role === Role.ADMIN) return <div> ADMIN </div>

    return <div> OPERATOR </div>
} 