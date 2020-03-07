import React  from "react";
import "./Input.scss";
import { FormAction } from "../Form";
import { defaultInputValidator } from "../../Utils/InputValidators";

interface Props {
  name: string;
  initialValue: string | undefined;
  dispatch: React.Dispatch<FormAction>;
  isValid?: (value: string) => [boolean, string];
  type: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ name, initialValue, dispatch, isValid = defaultInputValidator, type }, ref) => {
    const [dirty, setDirty] = React.useState(false);
    const [valid, setValid] = React.useState(!!initialValue)
    const [error, setError] = React.useState('')

    React.useEffect(() => dispatch({ name: name, status: !!initialValue }), []);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const [validState, errorMessage] = isValid(evt.target.value)
      setError(errorMessage)
      setValid(validState)
      setDirty(true);
      dispatch({ name: name, status: validState });
    };

    return (
      <div className={'input-container'}>
        {dirty && !valid && <p className={'error'}>{error}</p>}
        <input
          className={'formInput'}
          type={type}
          defaultValue={initialValue || ""}
          ref={ref}
          placeholder={name}
          style={{ borderColor: (valid || !dirty) ? "" : "red" }}
          onChange={handleChange}
        />
      </div>
    );
  }
);
