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

interface Props {}

export const Callcenters: React.FC<Props> = useConnect(({ state }) => {
  const { openTab } = state

  if (openTab.identifier !== CallcentersPageId) return null

  const [shouldUpdate, update] = useCounter();
  const resource = React.useMemo(
    () => createResource<CallCenter[]>( getCallcenters )(),
    [shouldUpdate]);
  return (
    <div className={'callcenters'}>
      <Title title={"Callcenters"} />
      <Suspense fallback={<Spinner />}>
        <CallcenterList resource={resource} />
      </Suspense>
    </div>
  );
});

export const CallcentersPageId = "callcenters-page";
