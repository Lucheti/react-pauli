import React from 'react'
import './Spinner.scss'

interface Props {
  text?: string
}

export const Spinner: React.FC<Props> = ({text = 'Loading...'}) => {

  return <div className={'circle-container'}><p className={'label'}> {text} </p><div className={'circle'}/></div>
}