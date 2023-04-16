import {
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import { FC, useState } from "react";

interface IInputFormFieldProps {
	inputLabel: string;
	stateSetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const InputFormField: FC<IInputFormFieldProps> = ({
	inputLabel,
	stateSetter,
}) => {
	const [value, setValue] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Remove all non-number characters
		const trimmedValue = event.target.value.replace(/\D/g, "");
		const formatted = Number(trimmedValue).toLocaleString();

		stateSetter(trimmedValue); // This value should just be numbers. Ex: 123456
		setValue(formatted); // This is the formatted value. Ex: 123,456
	};

    //https://stackoverflow.com/questions/46000544/react-controlled-input-cursor-jumps
    // Cursor jumps when changing values. See above link for fix
	return (
		<FormControl fullWidth sx={{ margin: "8px 0" }}>
			<InputLabel htmlFor={`${inputLabel}-input`}>
				{inputLabel}
			</InputLabel>
			<OutlinedInput
				id={`${inputLabel}-input`}
				label={inputLabel}
				value={value}
				onChange={handleChange}
				inputProps={{ maxLength: 9 }}
				startAdornment={
					<InputAdornment position="start">$</InputAdornment>
				}
			/>
		</FormControl>
	);
};
