import React from 'react'
import './NavList.css'

interface Props {
  title?: string
}

export const NavList: React.FC<Props> = ({title, children}) => {

  const parseClassName = () => "children" + (title ? " spaced" : " ");


  return (
      <ul className='list'>
        {title && <p className='title'> {title} </p>}
        <div className={parseClassName()}>
          {children}
        </div>
      </ul>
    )
}