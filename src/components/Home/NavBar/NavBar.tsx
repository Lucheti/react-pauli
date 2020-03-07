import React from 'react'
import './NavBar.scss'
import { NavItem } from './NavItem/NavItem'
import { NavList } from './NavList/NavList'
import { Toggler } from './Toggler/Toggler'
import { changeTab } from '../../Actions/NavBarActions'
import { OperatorsPageId } from '../AdminHome/Operators/Operators'
import { CoordinatorsPageId } from '../AdminHome/Coordinators/Coordinators'
import { useConnect } from '../../Utils/useConnect'
import { DatabasesPageId } from '../DatabaseLoader'

interface Props {}

export const NavBar: React.FC<Props> = useConnect(({state}) => {

  const {navbarVisible} = state
  const parseClassName = () => "navbar" + (navbarVisible ? "" : " hidden");

  return (
    <div className={parseClassName()}>
      <Toggler />
      <h3> Menu </h3>
      <NavList>
        <NavList title={"Usuarios"}>
          <NavItem text={"Operadores"} action={changeTab(OperatorsPageId)}/>
          <NavItem text={"Coordinadores"} action={changeTab(CoordinatorsPageId)}/>
        </NavList>
        <NavItem text={"Bases Telefonicas"} action={changeTab(DatabasesPageId)}/>
        <NavItem text={"Call Centers"} />
        <NavItem text={"Campos"} />
      </NavList>
    </div>
  );
})
