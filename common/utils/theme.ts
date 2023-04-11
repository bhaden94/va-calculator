import { Theme, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme: Theme = createTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: green[500],
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					background:
						"url('./background-gradient.svg') no-repeat center center fixed",
				},
			},
		},
        MuiDivider: {
            styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					background:
						"url('./gold-gradient.svg') no-repeat center center fixed",
				},
			},
        }
	},
});
