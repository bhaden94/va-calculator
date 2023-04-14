import { Theme, createTheme } from "@mui/material/styles";

const BLACK_GRADIENT_NAME = "background-gradient.svg";
const GOLD_GRADIENT_NAME = "gold-gradient.svg";

export const theme: Theme = createTheme({
	palette: {
		contrastThreshold: 4.5,
		primary: {
			main: "#fff",
			light: "#d8c690",
			dark: "#BE9E44",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		secondary: {
			main: "#000",
			light: "#d8c690",
			dark: "#BE9E44",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					background: `url('./${BLACK_GRADIENT_NAME}') no-repeat center center fixed`,
					color: "#fff",
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					background: `url('./${GOLD_GRADIENT_NAME}') no-repeat center center`,
					height: 2,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				contained: {
					background: `url('./${GOLD_GRADIENT_NAME}') no-repeat center center`,
					fontWeight: "bold",
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					color: "#e8e8e8",
				},
				secondary: {
					color: "#000",
				},
			},
		},
		MuiAutocomplete: {
			styleOverrides: {
				root: {
					"& label.Mui-focused": {
						color: "#1a1a1a",
					},
					"& .MuiInput-underline:after": {
						borderBottomColor: "#1a1a1a",
					},
					"& .MuiOutlinedInput-root": {
						"&.Mui-focused fieldset": {
							borderColor: "#1a1a1a",
							borderWidth: 1,
						},
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					"&.Mui-focused": {
						color: "#1a1a1a",
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					"&.Mui-focused .MuiOutlinedInput-notchedOutline ": {
						borderColor: "#1a1a1a",
						borderWidth: 1,
					},
				},
			},
		},
	},
});
