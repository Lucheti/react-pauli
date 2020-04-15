import React from "react";
import "./UserListItem.scss";
import {
  DisplayUserModelKeys,
  displayUserModelKeys,
  UserModel
} from "../../../../types/UserModel";
import { EditUserModalIdentifier } from "../../../Modals/constants";
import { DeleteButton } from "../../../Buttons/DeleteButton/DeleteButton";
import { EditButton } from "../../../Buttons/EditButton/EditButton";

interface Props {
  spaced?: boolean;
  user: UserModel;
  onDrag?: (user: UserModel) => void;
  editable?: boolean;
}

export const UserListItem: React.FC<Props> = ({
  spaced,
  user,
  onDrag,
  editable
}) => {
  const parseClassName = (): string => "user" + (spaced ? " space-bottom" : "");
  const dragHandler = onDrag ? onDrag : () => {};

  return (
    <div
      className={parseClassName()}
      onDrag={() => dragHandler(user)}
      onDragEnd={console.log}
      draggable
    >
      {displayUserModelKeys.map(key => {
        const data = user[key];
        return renderUser(data, key);
      })}

      {editable && (
        <div className={'buttons-container'}>
          <EditButton identifier={EditUserModalIdentifier} elem={user} />
          <DeleteButton onClick={() => alert("123")} />
        </div>
      )}
    </div>
  );
};

const renderUser = (data: string | number, key: DisplayUserModelKeys) => (
  <div key={key}>
    <p>{data}</p>
  </div>
);
