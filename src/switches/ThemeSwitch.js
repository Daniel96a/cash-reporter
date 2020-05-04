// import React from "react";
// import { connect } from "react-redux";
// import { Switch } from "@material-ui/core";
// import { toggleDarkMode } from "../redux/actions/theme";
// const ThemeSwitch = props => {
//   const [theme, setTheme] = React.useState({
//     theme: props.theme.isDark
//   });

//   const handleChange = name => event => {
//     setTheme({ ...theme, [name]: event.target.checked });
//     props.toggleDarkMode(event.target.checked);
//     localStorage.setItem("theme", event.target.checked);
//   };

//   return (
//     <Switch
//       checked={!theme.isDark}
//       onChange={handleChange("theme")}
//       value="theme"
//     />
//   );
// };
// const mapStateToProps = state => ({
//   isDark: state.theme.isDark
// });
// export default connect(mapStateToProps, { toggleDarkMode })(ThemeSwitch);
