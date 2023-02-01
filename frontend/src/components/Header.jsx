import * as React from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-app">
      <button className="button" type="button">
        <Link to="/">
          <img className="logo-header" src={logo} alt="logo" />
        </Link>
      </button>
      <p>MADFITNESS</p>

      <img className="menu-header" src={hamburger} alt="menu" />
    </div>
  );
}
