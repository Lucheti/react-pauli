import React, { Suspense } from "react";
import "./SurveyPage.scss";
import { OperatorSelectPage } from "./OperatorSelectPage/OperatorSelectPage";
import { SurveyFormId, SurveyPageId } from "./Constants";
import { useConnect } from "../../../Utils/useConnect";
import { Title } from "../../../Title/Title";
import { DatabaseSelectPage } from "./DatabaseSelectPage/DatabaseSelectPage";
import { QuotaCreatePage } from "./QuotaCreatePage/QuotaCreatePage";
import { SurveyStageButton } from "./SurveyStageButton/SurveyStageButton";
import { SurveyList } from "../../../Lists/Survey/SurveyList";
import { useGetResource } from "../../../Utils/CustomHooks";
import { getSurveys } from "../../../../requests/Requests";
import { Spinner } from "../../../Spinner/Spinner";

interface Props {}

export const SurveyPage: React.FC<Props> = useConnect(({ state, dispatch }) => {
  const { openTab, forms } = state;
  const formData = forms[SurveyFormId];
  const { stage } = formData;

  if (openTab.identifier !== SurveyPageId) return null;

  const resource = useGetResource(getSurveys);

  return (
    <div className={"surveyPage"}>
      <Suspense fallback={<Spinner />}>
        <Title title={"Campos"} />
        <SurveyList resource={resource} />
        <div className={"create-survey-form"}>
          <SurveyStageButton prev />
          <div className={"stage-container"}>
            <OperatorSelectPage stage={stage} />
            <DatabaseSelectPage stage={stage} />
            <QuotaCreatePage stage={stage} />
          </div>
          <SurveyStageButton next />
        </div>
      </Suspense>
    </div>
  );
});
