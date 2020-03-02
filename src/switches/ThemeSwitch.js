import React  from "react";
import { connect } from "react-redux";
import { Switch } from "@material-ui/core";
import { toggleDarkMode } from "../redux/actions/theme";
const ThemeSwitch = props => {
  const [theme, setTheme] = React.useState({
    isDark: props.isDark
  });

  const handleChange = name => event => {
    setTheme({ ...theme, [name]: event.target.checked });
    props.toggleDarkMode(event.target.checked);
    localStorage.setItem("isDark", event.target.checked);
  };
  console.log(props.isDark);

  return (
    <div style={{ position: "fixed", right: 40, top: 5 }}>
      <Switch
        checked={theme.isDark}
        onChange={handleChange("isDark")}
        value="isDark"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  isDark: state.theme.isDark
});
export default connect(mapStateToProps, { toggleDarkMode })(ThemeSwitch);
