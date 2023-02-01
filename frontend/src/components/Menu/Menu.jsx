import * as React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <>
      <div className="nav-right visible-xs">
        <div className="button" id="btn">
          <div className="bar top" />
          <div className="bar middle" />
          <div className="bar bottom" />
        </div>
      </div>

      <main>
        <nav>
          <div className="nav-right hidden-xs">
            <div className="button" id="btn">
              <div className="bar top" />
              <div className="bar middle" />
              <div className="bar bottom" />
            </div>
          </div>
        </nav>

        <a
          href="https://codepen.io/tonkec/"
          className="ua"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-user" />
        </a>
      </main>

      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <button className="button" type="button">
              <Link to="/">Item 1</Link>
            </button>
          </li>
          <li className="sidebar-item">
            <button className="button" type="button">
              <Link to="/">Item 2</Link>
            </button>
          </li>
          <li className="sidebar-item">
            <button className="button" type="button">
              <Link to="/">Item 3</Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
