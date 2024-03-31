import { FC, useEffect, useRef, useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { InformationPopup } from "../../../../common/components/SharedComponents/InformationPopup";
import { inputMarginStyle } from "../LocationAutocomplete/LocationAutocompleteStyles";

interface IInputFormFieldProps {
  inputLabel: string;
  informationBubbleTitle: string;
  stateSetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const InputFormField: FC<IInputFormFieldProps> = ({
  inputLabel,
  informationBubbleTitle,
  stateSetter,
}) => {
  const [value, setValue] = useState<string>("");
  const [cursor, setCursor] = useState<number | null>(null);
  const [numOfCommas, setNumOfCommas] = useState<number>(0);
  const ref = useRef(null);

  useEffect(() => {
    const input: any = ref?.current;
    if (input) {
      input.setSelectionRange(cursor, cursor);
    }
  }, [ref, cursor, value]);

  // https://stackoverflow.com/questions/46000544/react-controlled-input-cursor-jumps
  const calculateCursorPosition = (
    selectionStart: number | null,
    formattedInput: string,
  ): number => {
    const currNumOfCommas = (formattedInput.match(/,/g) || []).length;
    let newCursorPosition = currNumOfCommas - numOfCommas;
    setNumOfCommas(currNumOfCommas);
    return selectionStart ? selectionStart + newCursorPosition : 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-number characters
    const trimmedValue = event.target.value.replace(/\D/g, "");
    const formatted = Number(trimmedValue).toLocaleString();

    stateSetter(trimmedValue); // This value should just be numbers. Ex: 123456
    setValue(formatted === "0" ? "" : formatted); // This is the formatted value. Ex: 123,456
    setCursor(calculateCursorPosition(event.target.selectionStart, formatted));
  };

  return (
    <FormControl fullWidth sx={inputMarginStyle}>
      <InputLabel htmlFor={`${inputLabel}-input`}>{inputLabel}</InputLabel>
      <OutlinedInput
        id={`${inputLabel}-input`}
        inputRef={ref}
        label={inputLabel}
        value={value}
        onChange={handleChange}
        type="tel"
        inputProps={{ maxLength: 9 }}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        endAdornment={
          <InputAdornment position="end">
            <InformationPopup title={informationBubbleTitle} />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
