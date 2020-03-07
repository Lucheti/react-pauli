import React from 'react'
import './Spinner.scss'

interface Props {

}

export const Spinner: React.FC<Props> = () => {

  return <div className={'circle-container'}><p className={'label'}>Loading...</p><div className={'circle'}/></div>
}