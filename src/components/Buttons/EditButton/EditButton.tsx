import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { ModalIdentifier } from '../../../types/ModalIdentifier'
import { useConnect } from '../../Utils/useConnect'
import { createToggleModalAction } from '../../../Actions/ModalActions'
import './EditButton.scss'

interface Props {
  identifier: ModalIdentifier
  elem: any
}

export const EditButton: React.FC<Props> = useConnect(({identifier, elem, dispatch}) => {
  return (
    <button
      className={"editButton"}
      onClick={ () => dispatch(createToggleModalAction(identifier, elem)) }>
      <FontAwesomeIcon className={'icon'} icon={faEdit}/>
    </button>
);
})