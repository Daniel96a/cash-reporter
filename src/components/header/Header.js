import React from "react";
import "./Header.css";
const Header = props => {
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

export default Header;
