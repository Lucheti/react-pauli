import React  from "react";
import "./Input.css";
import { FormAction } from "../Form";
import { defaultInputValidator } from "../../Utils/InputValidators";

interface Props {
  name: string;
  initialValue: string | undefined;
  dispatch: React.Dispatch<FormAction>;
  isValid: boolean;
  type: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ name, initialValue, dispatch, isValid, type }, ref) => {
    const [dirty, setDirty] = React.useState(false);
    React.useEffect(() => dispatch({ name: name, status: !!initialValue }), []);
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setDirty(true);
      dispatch({ name: name, status: defaultInputValidator(evt.target.value) });
    };

    return (
      <input
        className={'formInput'}
        type={type}
        defaultValue={initialValue || ""}
        ref={ref}
        placeholder={name}
        style={{ borderColor: (isValid || !dirty) ? "" : "red" }}
        onChange={handleChange}
      />
    );
  }
);
