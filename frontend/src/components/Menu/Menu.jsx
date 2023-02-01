import * as React from "react";
import { Link } from "react-router-dom";
import ProgrammesGain from "../Programmes/ProgrammesGain";
import ProgrammesLose from "../Programmes/ProgrammesLose";
import ProgrammesSimpleTraining from "../Programmes/ProgrammesSimpleTraining";

export default function Menu() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <button className="button" type="button">
            <Link to="/firstprogramme">
              <ProgrammesGain />
            </Link>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="button" type="button">
            <Link to="/secondprogramme">
              <ProgrammesLose />
            </Link>
          </button>
        </li>
        <li className="sidebar-item">
          <button className="button" type="button">
            <Link to="/thirdprogramme">
              <ProgrammesSimpleTraining />
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
