import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { chooseTheme } from '../../redux/actions/theme'

import { switchThemeStyle } from '../../styles/Styles'
import { connect } from "react-redux";
import { useMediaQuery } from "@material-ui/core";

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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}



export const SwitchTheme = props => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const currentTheme = () => {
    if (props.currentTheme === 'dark') {
      localStorage.setItem('theme', 'dark')
      return 1
    }
    if (props.currentTheme === 'light') {
      localStorage.setItem('theme', 'light')
      return 0
    }
    if (props.currentTheme === null) {
      if (prefersDarkMode) {
        localStorage.setItem('theme', 'dark')
        return 1
      }
      localStorage.setItem('theme', 'light')
      return 0
    }
    return 0

  }
  const classes = switchThemeStyle();
  const [value, setValue] = React.useState(currentTheme());

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      props.chooseTheme('light')
    } else {
      props.chooseTheme('dark')
    }
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          className={classes.color}
          onClick={e => props.chooseTheme("light")}
          label="Light"
          {...a11yProps(0)}
        />
        <Tab
          className={classes.color}
          onClick={e => props.chooseTheme("dark")}
          label="Dark"
          {...a11yProps(1)}
        />
      </Tabs>
    </Paper>
  );
};

const mapStateToProps = state => ({
  currentTheme: state.theme.theme
});
export default connect(mapStateToProps, { chooseTheme })(SwitchTheme)
