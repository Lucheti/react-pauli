import React, { Suspense } from "react";
import "./Callcenters.scss";
import { Title } from "../../../Title/Title";
import { useCounter } from "../../../Utils/CustomHooks";
import { createResource } from "../../../../requests/Suspense";
import { CallCenter } from "../../../../types/UserModel";
import { getCallcenters } from "../../../../requests/Requests";
import { Spinner } from "../../../Spinner/Spinner";
import { CallcenterList } from "../../../Lists/Callcenter/CallcenterList/CallcenterList";
import { useConnect } from '../../../Utils/useConnect'
import { AddButton } from '../../../Buttons/AddButton/AddButton'
import { AddCallCenterModal} from '../../../Modals/AddCallCenterModal/AddCallCenterModal'
import { createToggleModalAction } from '../../../../Actions/ModalActions'
import { AddCallCenterModalId } from '../../../Modals/constants'
import { EditCallCenterModal } from '../../../Modals/EditCallCenterModal/EditCallCenterModal'

interface Props {}

export const Callcenters: React.FC<Props> = useConnect(({ state, dispatch }) => {
  const { openTab } = state

  if (openTab.identifier !== CallcentersPageId) return null

  const [shouldUpdate, update] = useCounter();
  const resource = React.useMemo(
    () => createResource<CallCenter[]>( getCallcenters )(),
    [shouldUpdate]);
  return (
    <div className={'callcenters'}>
      <Title title={"Callcenters"} >
        <AddButton onClick={() => dispatch(createToggleModalAction(AddCallCenterModalId))}/>
      </Title>
      <Suspense fallback={<Spinner />}>
        <CallcenterList resource={resource} />
      </Suspense>

      <AddCallCenterModal update={update}/>
      <EditCallCenterModal update={update}/>
    </div>
  );
});

export const CallcentersPageId = "callcenters-page";
