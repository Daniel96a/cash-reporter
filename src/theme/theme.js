import { createMuiTheme } from "@material-ui/core";
import { BLUE, GREY, DARK, LIGHT_BLUE } from "../colorTheme/colors";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      paper: "#F1F1F1",
      default: "#FCFCFC",
    },
    backdrop: {
      transparent: "rgba(0, 0, 0, .5)",
    },
    primary: {
      main: LIGHT_BLUE,
      light: LIGHT_BLUE,
      transparent: "rgba(20, 45, 82, .1)",
    },
    secondary: {
      main: GREY,
    },
    white: "#FFFFFF",
  },
});
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: GREY,
      default: DARK,
    },
    backdrop: {
      transparent: "rgba(0, 0, 0, .0)",
      blur: "blur(4px)",
    },
    primary: {
      main: BLUE,
      light: LIGHT_BLUE,
      transparent: "rgba(55,55,55, .05)",
    },
    secondary: {
      main: GREY,
    },
    white: "#FFFFFF",
  },
});
