import React, { Suspense } from "react";
import { Title } from "../../../../Title/Title";
import { Spinner } from "../../../../Spinner/Spinner";
import { UserList } from "../../../../Lists/User/UserList/UserList";
import { UserSelectList } from "../../../../Lists/User/UserSelectList/UserSelectList";
import { useGetResource } from "../../../../Utils/CustomHooks";
import { UserModel } from "../../../../../types/UserModel";
import { getUserByRole } from "../../../../../requests/Requests";
import { Role } from "../../../../Enums/Role";
import "./OperatorSelectPage.scss";
import { NameField, OperatorSelectPageId, SelectedOperatorsField, SurveyFormId } from '../Constants'
import { useConnect } from '../../../../Utils/useConnect'
import { changeInput } from '../../../../../Actions/FormActions'
import { SurveyStageButton } from '../SurveyStageButton/SurveyStageButton'
import { SurveyStage } from '../../../../../States/FormStates/SurveyFormState'

interface Props {
  stage: SurveyStage;
}

const selectedOperatorsFilter = (selectedOperators: UserModel[]) => (data: UserModel[]) =>
  data.filter( user => !selectedOperators.find( operator => user.id === operator.id))

export const OperatorSelectPage: React.FC<Props> = useConnect<Props>(
  ({ stage, dispatch, state }) => {
    const resource = useGetResource<UserModel[]>(() =>
      getUserByRole(Role.OPERATOR)
    );

    if (stage !== OperatorSelectPageId) return null;

    const selectedOperators = state.forms[SurveyFormId][SelectedOperatorsField];
    const onUserSelect = (list: UserModel[]) =>
      dispatch(changeInput(SurveyFormId, SelectedOperatorsField, list));

    return (
      <div className={"operator-select-page"}>
        <input className={'name'} placeholder={'Nombre del campo'} onChange={(evt) => dispatch(changeInput(SurveyFormId, NameField, evt.target.value))}/>
        <Title title={"Seleccion de operadores"}/>
        <div className={"selector-container"}>

          <Suspense fallback={<Spinner />}>
            <div className={"list-container"}>
              <UserList resource={resource} filter={ selectedOperatorsFilter(selectedOperators) } />
            </div>
            <div className={"list-container dropable"}>
              <UserSelectList
                onSelect={onUserSelect}
                initialData={selectedOperators}
              />
            </div>
          </Suspense>

        </div>
      </div>
    );
  }
);

