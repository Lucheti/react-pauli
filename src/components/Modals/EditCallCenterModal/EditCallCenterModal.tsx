import React from 'react'
import { Modal } from '../../Modal/Modal'
import { CallCenterForm } from '../../Forms/CallCenterForm'
import { EditCallcenterModalId } from '../constants'
import { useConnect } from '../../Utils/useConnect'
import { CallCenter } from '../../../types/UserModel'
import { addCallCenter, updateCallCenter } from '../../../requests/Requests'
import { createToggleModalAction } from '../../../Actions/ModalActions'

interface Props {
  update: () => void
}

export const EditCallCenterModal: React.FC<Props> = useConnect(({state, update, dispatch}) => {
  const {modals} = state
  const modalState  = modals[EditCallcenterModalId]
  const {elem: callCenter} = modalState

  const handleSubmit = (callCenter: CallCenter) => updateCallCenter(callCenter).then( handleFinish )
  const handleFinish = () => {
    update()
    dispatch(createToggleModalAction(EditCallcenterModalId))
  }


  return (
    <div>
      <Modal modalId={EditCallcenterModalId}>
      <CallCenterForm onSubmit={handleSubmit} callCenter={ callCenter }/>
  </Modal>
  </div>
);
})
