import { Theme, createTheme } from "@mui/material/styles";

export const theme: Theme = createTheme({
	palette: {
		contrastThreshold: 4.5,
		primary: {
			main: "#fff",
		},
		secondary: {
			main: "#000",
		},
		// text: {
		//     primary: "red",
		//     secondary: "blue",
		// },
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					background:
						"url('./background-gradient.svg') no-repeat center center fixed",
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					background:
						"url('./gold-gradient.svg') no-repeat center center",
					height: 2,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					background:
						"url('./gold-gradient.svg') no-repeat center center",
				},
			},
		},
	},
});
