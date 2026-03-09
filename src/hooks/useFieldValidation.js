import { useCallback, useState } from "react";

export function useFieldValidation({ initialValue = "", validate, message }) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const onChange = useCallback(
    (e) => {
      const next = e.target.value;
      setValue(next);

      if (touched && error && validate(next)) {
        setError("");
      }
    },
    [touched, error, validate]
  );

  const onBlur = useCallback(() => {
    setTouched(true);

    if (!validate(value)) setError(message);
    else setError("");
  }, [value, validate, message]);

  return { value, error, onChange, onBlur };
}