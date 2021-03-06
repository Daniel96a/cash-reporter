import { makeStyles } from "@material-ui/core";
import { isMobile } from "react-device-detect";

export const bottomNavbarStyle = makeStyles((theme) => ({
  button: {
    color: theme.palette.text.primary,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    backdropFilter: "blur(8px)",
    position: "fixed",
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    "& .MuiBottomNavigationAction-root .Mui-selected": {
      color: theme.palette.primary.light,
    },
  },
}));

export const switchThemeStyle = makeStyles((theme) => ({
  color: {
    color: theme.palette.text.primary,
  },
  root: {
    backgroundColor: "transparent",
    "& .MuiTab-root": {
      minWidth: 109,
    },
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.background.default,
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: theme.palette.primary.light,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
export const detailsDialog = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      margin: "auto",
      position: "fixed",
      height: 800,
      width: 400,
      zIndex: 9999999,
      "@media only screen and (max-width: 600px)": {
        top: 0,
        bottom:0,
        left: 0,
        right:0,
        width: '100%',
        height: '100%'
      },
      "& div.buttons": {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        maxWidth: 600,
        margin: "auto",
        display: 'grid',
        backgroundColor: theme.palette.background.paper,
      },
    },
    "& .MuiDialog-paperScrollPaper": {
      display: "flex",
      maxHeight: "100vh",
      flexDirection: "column",
    },
    "& .MuiBackdrop-root": {
      backdropFilter: theme.palette.backdrop.blur,
      backgroundColor: theme.palette.backdrop.transparent,
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: theme.palette.primary.transparent,
    },
    "& .MuiTypography-h6": {
      color: "white",
    },
    "& input": {
      color: theme.palette.text.primary,
      borderColor: theme.palette.primary.transparent,
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      overflowY: "visible",
    },
    "& .MuiDialogContent-root": {
      flex: "1 1 auto",
      padding: "8px 10px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "auto",
      "& ::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
    "& .MuiButtonBase-root": {
      margin: "10px 20px 10px 20px",
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.light,
      height: 38,
      "&:last-child": {
        marginBottom: 20,
      },
    },

    "& .MuiDialogTitle-root": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },
  },
  label: {
    "& .MuiFormLabel-root": {
      color: theme.palette.text.primary,
    },
    "& .MuiFormControl-root": {
      margin: "10px 0px 10px 0px",
      width: "-webkit-fill-available",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline:hover:before": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiInput-underline:before": {
      borderColor: theme.palette.text.secondary,
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.primary.light,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline:hover": {
      borderColor: theme.palette.primary.light,
    },
    "&:-webkit-autofill": {
      backgroundColor: "transparent !important,",
      backgroundImage: "none !important",
    },
  },
}));

export const editDialog = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      margin: "auto",
      position: "fixed",
      height: 800,
      width: 400,
      zIndex: 9999999,
      "@media only screen and (max-width: 600px)": {
        top: 0,
        bottom:0,
        left: 0,
        right:0,
        width: '100%',
        height: '100%'
      },

      "& div.buttons": {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        maxWidth: 600,
        margin: "auto",
        display: 'grid',
        backgroundColor: theme.palette.background.paper,
      },
    },
    "& .MuiBackdrop-root":{
      backgroundColor: 'transparent',
    },
    "& .MuiDialog-paperScrollPaper": {
      display: "flex",
      maxHeight: "100vh",
      flexDirection: "column",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "theme.palette.background.paper",
    },
    "& .MuiTypography-h6": {
      color: "white",
    },
    "& input": {
      color: theme.palette.text.primary,
      borderColor: theme.palette.primary.transparent,
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      overflowY: "visible",
    },
    "& .MuiDialogContent-root": {
      flex: "1 1 auto",
      padding: "8px 10px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "auto",
      "& ::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
    "& .MuiButtonBase-root": {
      margin: "10px 20px 10px 20px",
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.light,
      height: 38,
      "&:last-child": {
        marginBottom: 20,
      },
    },

    "& .MuiDialogTitle-root": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },
  },
  label: {
    "& .MuiFormLabel-root": {
      color: theme.palette.text.primary,
    },
    "& .MuiFormControl-root": {
      margin: "10px 0px 10px 0px",
      width: "-webkit-fill-available",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline:hover:before": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiInput-underline:before": {
      borderColor: theme.palette.text.secondary,
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.primary.light,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline:hover": {
      borderColor: theme.palette.primary.light,
    },
  },
}));

export const confirmDialog = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paper": {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
  },
}));

export const switchListsStyle = makeStyles((theme) => ({
  color: {
    color: theme.palette.text.primary,
  },
  root: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 20,
    position: "relative",
    overflow: "auto",
    "& .MuiTabs-root": {
      margin: "auto",
      maxWidth: 600,
    },
    "& .react-swipeable-view-container": {
      // height: window.innerHeight - 154,
    },
    "& ul": {
      marginBottom: 5,
    },
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.background.default,
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: theme.palette.primary.light,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
export const listStyle = makeStyles((theme) => ({
  root: {
    display: "list-item",
    "& .MuiButtonBase-root": {
      padding: 10,
      marginTop: 5,
      maxWidth: 600,
      margin: "auto",
    },

    "& .MuiTypography-body2": {
      color: theme.palette.text.primary,
    },
    "& .MuiTypography-colorTextSecondary": {
      color: theme.palette.text.secondary,
    },
    "& .MuiTouchRipple-root": {
      userSelect: "none",
    },
    "& .MuiListItem-gutters": {
      backgroundColor: theme.palette.background.paper,

      minHeight: "65px",
      userSelect: "none",
      borderRadius: 20,
    },
    "& .MuiAvatar-root": {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: 10,
    },
  },
}));
export const reportListStyle = makeStyles((theme) => ({
  root: {
    display: "list-item",
    overflow: "auto",
    height: isMobile ? "calc(100vh - 216px)" : "calc(100vh - 106px)",
    "& .MuiButtonBase-root": {
      padding: 10,
      marginTop: 5,
      maxWidth: 600,
      margin: "auto",
    },
    "& .MuiTypography-body2": {
      color: theme.palette.text.primary,
    },
    "& .MuiTypography-colorTextSecondary": {
      color: theme.palette.text.secondary,
    },
    "& .MuiTouchRipple-root": {
      userSelect: "none",
    },
    "& .MuiListItem-gutters": {
      backgroundColor: theme.palette.background.paper,
      // borderBottom: `1px solid ${theme.palette.text.secondary}`,
      minHeight: "65px",
      userSelect: "none",
      borderRadius: 20,
    },
  },
}));

export const headerStyle = {
  boxShadow: "none",
};
export const loginFormStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    position: "fixed",
    top: 200,
    textAlign: "center",
    left: 10,
    right: 10,
    maxWidth: 600,
    margin: "auto",
    padding: "20px 20px 20px 20px",
    borderRadius: 10,
    backgroundColor: "transparent",
    "& input": {
      color: theme.palette.text.primary,
    },
    "& button": {
      width: "fit-content",
      margin: "auto",
      color: theme.palette.white,
      backgroundColor: theme.palette.primary.main,
    },
  },
  label: {
    "& .MuiFormLabel-root": {
      color: theme.palette.text.primary,
    },
    "& .MuiFormControl-root": {
      margin: "10px 0px 10px 0px",
      width: "-webkit-fill-available",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline:hover:before": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiInput-underline:before": {
      borderColor: theme.palette.text.secondary,
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.primary.light,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline:hover": {
      borderColor: theme.palette.primary.light,
    },
  },
}));
export const tableStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    overflow: "hidden",
    "& td, th": {
      padding: 5,
      "& input": {
        textAlign: "center",
      },
    },
    "& .MuiTable-root": {
      overflow: "hidden",
    },
    color: theme.palette.text.primary,
    marginVertical: 20,
    "& td": {
      maxWidth: 20,
    },
    "& .MuiTableContainer-root": {
      overflow: "hidden",
      width: "initial",
    },
  },
}));

export const profileStyle = makeStyles((theme) => ({
  root: {
    "& *": {
      backgroundColor: theme.palette.primary.paper,
    },
    margin: 10,
    position: "relative",
    width: 600,
    "& .MuiCardContent-root:last-child":{
      padding: 15
    }
  },
  hr: {
    margin: "10px 0px 10px 0px",
  },
  button: {
    margin: "auto",
    border: 0,
    position: "absolute",
    float: "right",
    top: 4,
    right: -5,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.light,
      width: 30,
      height: 30,
      borderRadius: 50,
      zIndex: 10,
    },
  },
}));
