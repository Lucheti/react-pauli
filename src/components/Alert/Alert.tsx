import React from 'react'
import './Alert.scss'
import { useConnect } from '../Utils/useConnect'
import { hideAlert } from '../../Actions/AlertActions'
import { widthTransition } from '../Utils/StyleHooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

interface Props {

}

export const Alert: React.FC<Props> = useConnect(({state, dispatch}) => {

  const { alert } = state
  const { alertVisible, alertMessage } = alert
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() =>{
    if (alertVisible) {
      setTimeout(() => setVisible(true), 1500)
      setTimeout(() => setVisible(false), 5000)
      setTimeout(() => {
        dispatch(hideAlert())
      }, 7000)
    }
  },[alertVisible])

  if (!alertVisible) return null

  return (
    <div className={'alert-container'}>
      <FontAwesomeIcon className={'icon'} icon={faExclamationTriangle} size={'2x'} style={{margin: visible? '0 1.5rem 0 0' : '0px'}}/>
      <div className={'message-container'} style={{...widthTransition(visible)}}>
        <p className={'message'} style={{...widthTransition(visible)}}>{alertMessage}</p>
      </div>
    </div>
  )
})