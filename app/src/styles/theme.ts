import { ThemeOptions } from "@mui/material/styles";
import { createTheme, responsiveFontSizes } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#d2322c",
      contrastText: "#060606",
    },
    secondary: {
      main: "#2ccdd2",
    },
    warning: {
      main: "#d2852c",
    },
    info: {
      main: "#cdd22c",
    },
    success: {
      main: "#2cd231",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(255,255,255,0.6)",
      disabled: "rgba(255,255,255,0.38)",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    error: {
      main: "#d22c7a",
      contrastText: "#000000",
    },
  },
};

export const Theme = responsiveFontSizes(createTheme(themeOptions));
