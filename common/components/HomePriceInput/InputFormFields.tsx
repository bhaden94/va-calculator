import {
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import { FC } from "react";

interface IInputFormFieldProps {
	inputLabel: string;
	stateSetter: React.Dispatch<React.SetStateAction<string | null>>;
}

export const InputFormField: FC<IInputFormFieldProps> = ({
	inputLabel,
	stateSetter,
}) => {
	return (
		<FormControl fullWidth sx={{ margin: "8px 0" }}>
			<InputLabel htmlFor={`${inputLabel}-input`}>
				{inputLabel}
			</InputLabel>
			<OutlinedInput
				id={`${inputLabel}-input`}
				inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
				startAdornment={
					<InputAdornment position="start">$</InputAdornment>
				}
				label={inputLabel}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					stateSetter(event.target.value);
				}}
			/>
		</FormControl>
	);
};
