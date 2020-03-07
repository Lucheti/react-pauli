import React from "react";
import "./AddUserButton.scss";
import { createToggleModalAction } from "../../../Actions/ModalActions";
import { AddUserModalIdentifier } from "../../../Modals/AddUserModal/AddUserModal";
import { useConnect } from '../../../Utils/useConnect'

interface Props {}

export const AddUserButton: React.FC<Props> = useConnect<Props>(({dispatch}) => {

  return (
    <button
      className={"button"}
      onClick={() => dispatch(createToggleModalAction(AddUserModalIdentifier))}
    />
  );
})
