import hamburger from "../assets/hamburger.png";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-app">
      <img className="logo-header" src={logo} alt="logo" />
      <p>MADFITNESS</p>

      <img className="menu-header" src={hamburger} alt="menu" />
    </div>
  );
}
