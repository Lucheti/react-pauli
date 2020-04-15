import React from "react";
import "./Cuotas.scss";

interface Props {
  data: string[]
  onChange: (value: string) => void
}

export const Selection: React.FC<Props> = ({data, onChange}) => {
  const [selected, setSelected] = React.useState(-1);

  const handleChange = (index: number) => {
    setSelected(index)
    data && onChange(data[index])
  }

  return (
    <div className={"cuotas-container"}>
      {data && data.map((value, index) => (
        <Option i={index} onClick={handleChange} selected={selected} value={value}/>
      ))}
    </div>
  );
};

interface CuotaProps {
  i: number;
  onClick: (i: number) => void;
  selected: number;
  value: string
}

const Option: React.FC<CuotaProps> = ({ i, onClick, selected, value }) => (
  <div
    onClick={() => onClick(i)}
    className={"cuota " + (selected === i && "selected")}
  >
    <p>
      {value}
    </p>
  </div>
);
