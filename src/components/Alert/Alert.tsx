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
      setTimeout(() => setVisible(true), 1000)
      setTimeout(() => setVisible(false), 8000)
      setTimeout(() => dispatch(hideAlert()), 9000)
    }
  },[alertVisible])

  if (!alertVisible) return null

  return (
    <div className={'alert-container'}>
      <FontAwesomeIcon className={'icon'} icon={faExclamationTriangle} size={'2x'}/>
      <div className={'alert-message-container' + (visible && " visible")}>
        <p className={'alert-message'} style={{...widthTransition(visible), color: 'white' ,fontSize: '1.2rem', overflow: 'hidden'}}>{alertMessage}</p>
      </div>
    </div>
  )
})