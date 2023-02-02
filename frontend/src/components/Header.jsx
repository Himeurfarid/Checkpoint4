import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);

  function handleClickHidden() {
    setIsHidden(!isHidden);
  }
  return (
    <div className="header-app">
      <button className="button" type="button">
        <Link to="/">
          <img className="logo-header" src={logo} alt="logo" />
        </Link>
      </button>
      <p>MADFITNESS</p>
      <button
        id="hidden"
        type="button"
        onClick={handleClickHidden}
        label="hamburger"
      >
        <img className="menu-header" src={hamburger} alt="menu" />
      </button>
      <nav className={isHidden ? "notHidden" : "isHidden"}>
        <button
          id="nothidden"
          type="button"
          onClick={handleClickHidden}
          label="hamburger"
        >
          <img className="menu-header" src={hamburger} alt="menu" />
        </button>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="home" className="menu-item" href="/programmes">
          Programmes
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
