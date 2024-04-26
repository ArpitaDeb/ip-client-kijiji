import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/kijiji-logo.png"

import "./Navbar.scss";

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__navbar">
        <nav className="navbar">
          <Link to="/" className="navbar__btn">
            <img src={logo} className="site-header__logo" alt="kijiji-Logo" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
