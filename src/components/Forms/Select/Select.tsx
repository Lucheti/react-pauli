import React from "react";
import "./Select.scss";

export interface InputOption {
  label: string;
  value: string;
}

interface Props {
  errorMessage: string;
  isValid: boolean;
  handleChange: (name: string, value: string) => void;
  name: string;
  data: InputOption[];
}

export const Select: React.FC<Props &
  React.InputHTMLAttributes<HTMLInputElement>> = ({
  errorMessage,
  isValid,
  handleChange,
  data,
  name,
  ...props
}) => {
  const [dirty, setDirty] = React.useState(false);
  const [label, setLabel] = React.useState<string>("");
  const [showDatalist, setShowDatalist] = React.useState(false);

  const onChange = (value: string, label: string) => {
    setDirty(true);
    setLabel(label);
    setShowDatalist(false);
    handleChange(name, value);
  };

  return (
    <div className={'select'}>
      <div className={"input-container"}>
        {dirty && !isValid && <p className={"error"}> {errorMessage} </p>}
        <input
          {...props}
          value={label || props.defaultValue || props.value}
          autoComplete={"off"}
          list={`list-${name}`}
          className={"formInput " + (props.className || "")}
          onClick={() => setShowDatalist(true)}
          readOnly={true}
        />
        {showDatalist && (
          <div className={"datalist-container"}>
            <div
              className={"datalist"}
              onMouseLeave={() => setShowDatalist(false)}
            >
              {!data.length && <p> Cargando... </p>}
              {data.map(({ value, label }, index) => (
                <p key={index} onClick={() => onChange(value, label)}>
                  {" "}
                  {label}{" "}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
