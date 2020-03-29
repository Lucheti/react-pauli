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
import { SelectedOperatorsField, SurveyFormId } from "../Constants";
import { useConnect } from '../../../../Utils/useConnect'
import { changeInput } from '../../../../../Actions/FormActions'

interface Props {
  stage: string;
}

const selectedOperatorsFilter = (selectedOperators: UserModel[]) => (data: UserModel[]) => data.filter( user => !selectedOperators.find( operator => user.id === operator.id))

export const OperatorSelectPage: React.FC<Props> = useConnect<Props>(
  ({ stage, dispatch, state, children }) => {
    if (stage !== OperatorSelectPageId) return null;

    const selectedOperators = state.forms[SurveyFormId][SelectedOperatorsField];
    const resource = useGetResource<UserModel[]>(() =>
      getUserByRole(Role.OPERATOR)
    );
    const onUserSelect = (list: UserModel[]) =>
      dispatch(changeInput(SurveyFormId, SelectedOperatorsField, list));

    return (
      <div className={"operator-select-page"}>
        <Title title={"Seleccion de operadores"}>{children}</Title>
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

export const OperatorSelectPageId = "operator-select-page";
