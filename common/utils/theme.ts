import { createTheme, Theme } from "@mui/material/styles";
import { Open_Sans, Sofia_Sans_Semi_Condensed } from "next/font/google";

const BLACK_GRADIENT_NAME = "background-gradient.svg";
const GOLD_GRADIENT_NAME = "gold-gradient.svg";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const sofiaSans = Sofia_Sans_Semi_Condensed({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme: Theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily,
    h1: { fontFamily: sofiaSans.style.fontFamily },
    h2: { fontFamily: sofiaSans.style.fontFamily },
    h3: { fontFamily: sofiaSans.style.fontFamily },
    h4: { fontFamily: sofiaSans.style.fontFamily },
  },
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
        text: {
          color: "#be9e44",
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
            "& fieldset": {
              borderRadius: "8px",
            },
            "&.Mui-focused fieldset": {
              borderLeft: "1px solid #1a1a1a",
              borderRight: "1px solid #1a1a1a",
              borderTop: "1px solid #1a1a1a",
              borderBottom: "none",
              borderRadius: "8px 8px 0 0",
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
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "8px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1a1a1a",
            borderWidth: 1,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: `url('./${GOLD_GRADIENT_NAME}') no-repeat center center`,
          color: "#000",
        },
      },
    },
  },
});
