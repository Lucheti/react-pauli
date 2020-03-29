import React from "react";
import "./Title.scss";

interface Props {
    title: string
}

export const Title: React.FC<Props> = ({title, children}) => {
  return (
    <div className={"title-container"}>
      <h3 className={"title"}>{title}</h3>
        {children}
    </div>
  );
};
