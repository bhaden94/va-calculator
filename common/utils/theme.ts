import { Theme, createTheme } from "@mui/material/styles";

const BLACK_GRADIENT_NAME = "background-gradient.svg";
const GOLD_GRADIENT_NAME = "gold-gradient.svg";

export const theme: Theme = createTheme({
	palette: {
		contrastThreshold: 4.5,
		primary: {
			main: "#d8c690",
			light: "#d8c690",
			dark: "#BE9E44",
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		secondary: {
			main: "#000",
			light: "#d8c690",
			dark: "#BE9E44",
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					background: `url('./${BLACK_GRADIENT_NAME}') no-repeat center center fixed`,
					color: "#fff"
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
	},
});
