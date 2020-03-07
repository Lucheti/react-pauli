import React from 'react'
import './NavList.css'

interface Props {
  title?: string
  className?: string
}

export const NavList: React.FC<Props> = ({title, children, className}) => {

  const parseClassName = () => "children" + (title ? " spaced" : " ");


  return (
      <ul className={'list ' + className || "" }>
        {title && <p className={'title'}> {title} </p>}
        <div className={parseClassName()}>
          {children}
        </div>
      </ul>
    )
}