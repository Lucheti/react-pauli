import React from "react";
import "./DeleteButton.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
  onClick: () => void
}

export const DeleteButton: React.FC<Props> = ({onClick}) => {

  return (
    <button
      className={"deleteButton"}
      onClick={ onClick }
    >
      <FontAwesomeIcon className={'icon'} icon={faTrash}/>
    </button>
  );
}
