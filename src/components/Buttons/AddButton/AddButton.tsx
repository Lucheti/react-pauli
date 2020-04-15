import React from "react";
import "./AddButton.scss";

interface Props {
  onClick: () => void
}

export const AddButton: React.FC<Props> = ({onClick}) => {

  return (
    <button
      className={"addButton"}
      onClick={ onClick }
    />
  );
}
