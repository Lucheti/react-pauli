import React from 'react'
import { Modal } from '../../Modal/Modal'
import { CallCenterForm } from '../../Forms/CallCenterForm'
import { AddCallCenterModalId } from '../constants'
import { CallCenter } from '../../../types/UserModel'
import { addCallCenter } from '../../../requests/Requests'
import { createToggleModalAction } from '../../../Actions/ModalActions'
import { useConnect } from '../../Utils/useConnect'
import { showAlert } from '../../../Actions/AlertActions'

interface Props {
  update: () => void
}

export const AddCallCenterModal: React.FC<Props> = useConnect(({dispatch, update}) => {

    const handleSubmit = (callCenter: CallCenter) => addCallCenter(callCenter)
      .then( handleFinish )
      .catch(console.log)

    const handleFinish = (res: any) => {
      console.log(res)
      if (!res.ok) res.json().then( (err: any) => dispatch(showAlert(err.message)))
      else {
        update()
        dispatch(createToggleModalAction(AddCallCenterModalId))
      }
    }


    return (
      <div>
          <Modal modalId={AddCallCenterModalId}>
              <CallCenterForm onSubmit={handleSubmit}/>
          </Modal>
      </div>
    );
})

