import React from 'react'
import './CallScreen.scss'
import { Selection } from './Cuotas/Selection'

interface Props {

}

export const CallScreen: React.FC<Props> = () => {

    return (
      <>
        <Selection/>
        <div className={'phone'}> <p>(+54) 11 1234-5678</p> </div>
        <Selection/>
      </>
    );
}