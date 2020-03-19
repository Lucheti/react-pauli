import React, { Dispatch, SetStateAction } from "react";
import "./Cuotas.scss";

interface Props {}

export const Selection: React.FC<Props> = () => {
  const [selected, setSelected] = React.useState(-1);

  return (
    <div className={"cuotas-container"}>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <Option i={i} onClick={setSelected} selected={selected} />
      ))}
    </div>
  );
};

interface CuotaProps {
  i: number;
  onClick: Dispatch<SetStateAction<number>>;
  selected: number;
}

const Option: React.FC<CuotaProps> = ({ i, onClick, selected }) => (
  <div
    onClick={() => onClick(i)}
    className={"cuota " + (selected === i && "selected")}
  >
    <p>
      {i % 2 === 0 ? "mujeres" : "hombres"}
      {i}
    </p>
  </div>
);
