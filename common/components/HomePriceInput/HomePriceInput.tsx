import {
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import { FC } from "react";

interface IHomePriceInputProps {
	inputLabel: string;
}

export const HomePriceInput: FC<IHomePriceInputProps> = ({ inputLabel }) => {
	return (
		<div style={{ width: "100%" }}>
			<FormControl fullWidth sx={{ margin: "8px 0" }}>
				<InputLabel htmlFor="outlined-adornment-amount">
					{inputLabel}
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment-amount"
					inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					startAdornment={
						<InputAdornment position="start">$</InputAdornment>
					}
					label={inputLabel}
				/>
			</FormControl>
		</div>
	);
};
