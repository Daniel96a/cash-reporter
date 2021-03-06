import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { chooseTheme } from "../../redux/actions/theme";

import { switchThemeStyle } from "../../styles/Styles";
import { connect } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component={"div"}
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export const SwitchTheme = ({
  theme: { themeDisabled, themeNumber, isDark },
  chooseTheme,
}) => {
  const classes = switchThemeStyle();
  const chooseLightTheme = () => {
    localStorage.setItem("theme", "light");
    chooseTheme({
      isDark: false,
      themeNumber: 0,
      themeDisabled: themeDisabled,
    });
  };
  const chooseDarkTheme = () => {
    localStorage.setItem("theme", "dark");
    chooseTheme({
      isDark: true,
      themeNumber: 1,
      themeDisabled: themeDisabled,
    });
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={themeNumber}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          className={classes.color}
          onClick={chooseLightTheme.bind(this)}
          label="Light"
          disabled={themeDisabled}
          {...a11yProps(0)}
        />
        <Tab
          className={classes.color}
          onClick={chooseDarkTheme.bind(this)}
          disabled={themeDisabled}
          label="Dark"
          {...a11yProps(1)}
        />
      </Tabs>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});
export default connect(mapStateToProps, { chooseTheme })(SwitchTheme);
