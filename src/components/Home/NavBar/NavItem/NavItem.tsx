import React from 'react'
import './NavItem.scss'

interface Props {
  text: string,
}

export const NavItem: React.FC<Props & React.HTMLAttributes<HTMLLIElement>> =({text, className, ...props}) => {
  return <li className={"item " + className || ""} {...props}> {text} </li>
}