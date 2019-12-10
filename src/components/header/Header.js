import React from "react";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Header.css";
const Header = props => {
  const cookie = new Cookies();
  const logout = e => {
    props.doLogout();
    e.preventDefault();
  };
  return (
    <div className="header">
      <a href="#default" className="logo">
        <big> Cash Reporter </big>
      </a>
      <div className="header-right">
        <a className="active" name="Login" href="/" onClick={logout.bind(this)}>
          Logout
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default withRouter(Header);
