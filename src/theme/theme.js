import { createMuiTheme } from "@material-ui/core";
import { BLUE, GREY, DARK, LIGHT_BLUE } from "../colorTheme/colors";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      paper: "#F1F1F1",
      default: "#FCFCFC"
    },
    primary: {
      main: BLUE,
      light: LIGHT_BLUE,
      transparent: "rgba(0,0,0, .1)"
    },
    secondary: {
      main: GREY
    },
  }
});
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: GREY,
      default: DARK
    },
    primary: {
      main: BLUE,
      light: LIGHT_BLUE,
      transparent: "rgba(55,55,55, .1)"
    },
    secondary: {
      main: GREY
    },
  }
});
