import React from "react";
import "./navbar.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar">
        <div className="navbar__left">
          <img src={logo} alt="yoxdu" />
          <h1>NATURAL COSMETIC</h1>
        </div>
        <div className="navbar__right">
          <div className="navbar__right__links">
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="">About Us</Link>
            <Link to="">Shop</Link>
          </div>
          <div className="navbar__right__icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
