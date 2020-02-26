import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Switch } from "@material-ui/core";
import { toggleDarkMode } from "../redux/actions/theme";
const ThemeSwitch = props => {
  const savedTheme = () => {
    let savedTheme = true;
    if (localStorage.isDark === "false") {
      return false;
    } else {
      return savedTheme;
    }
  };
  const [theme, setTheme] = React.useState({
    isDark: savedTheme()
  });

  const handleChange = name => event => {
    setTheme({ ...theme, [name]: event.target.checked });
    props.toggleDarkMode(event.target.checked);
    localStorage.setItem("isDark", event.target.checked);
  };
  console.log(props.isDark);

  return (
    <Fragment>
      <Switch
        checked={theme.isDark}
        onChange={handleChange("isDark")}
        value="isDark"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </Fragment>
  );
};
const mapStateToProps = state => ({
  isDark: state.theme.isDark
});
export default connect(mapStateToProps, { toggleDarkMode })(ThemeSwitch);
