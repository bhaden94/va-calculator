import { ThemeOptions } from "@mui/material/styles";

export const mainGradient: string =
	"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(26,26,26,1) 100%)";

export const themeOptions: ThemeOptions = {
	palette: {
		mode: "light",
		primary: {
			main: "#1a1a1a",
			dark: "#000000",
		},
		secondary: {
			main: "#be9e44",
			light: "#d8c690",
		},
		background: {
			paper: "#fff",
			default: "#fafafa",
		},
		text: {
			primary: "#000",
			secondary: "#1a1a1a",
		},
	},
	typography: {
		fontFamily: "Sofia Sans Semi Condensed, Sans-Serif",
	},
};

// Something like this may work for the app bar
// <AppBar
//   position="static"
//   style={{ background: mainGradient }}
// >
