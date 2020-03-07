import React from 'react'
import './NavBar.scss'
import { NavItem } from './NavItem/NavItem'
import { NavList } from './NavList/NavList'
import { Toggler } from './Toggler/Toggler'
import { changeTab, logout } from '../../Actions/NavBarActions'
import { OperatorsPageId } from '../AdminHome/Operators/Operators'
import { CoordinatorsPageId } from '../AdminHome/Coordinators/Coordinators'
import { useConnect } from '../../Utils/useConnect'
import { DatabasesPageId } from '../DatabaseLoader'
import { showAlert } from '../../Actions/AlertActions'

interface Props {}

export const NavBar: React.FC<Props> = useConnect(({state, dispatch}) => {

  const {navbarVisible} = state
  const parseClassName = () => "navbar" + (navbarVisible ? "" : " hidden");

  React.useEffect(() => {
    showAlert('alert')
  },[])

  return (
    <div className={parseClassName()}>
      <Toggler />
      <h3> Menu </h3>
      <NavList className={'navlist-wrapper'}>
        <NavList title={"Usuarios"}>
          <NavItem text={"Operadores"} onClick={ () => dispatch(changeTab(OperatorsPageId))}/>
          <NavItem text={"Coordinadores"} onClick={() => dispatch(changeTab(CoordinatorsPageId))}/>
        </NavList>
        <NavItem text={"Bases Telefonicas"} onClick={() => dispatch(changeTab(DatabasesPageId))}/>
        <NavItem text={"Call Centers"} />
        <NavItem text={"Campos"} />
        <NavItem text={"Cerrar Sesión"} onClick={() => dispatch(logout())} className={'logout'}/>
      </NavList>
    </div>
  );
})
