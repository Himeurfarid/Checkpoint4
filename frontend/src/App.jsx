import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Header from "./components/Header";
import Gain from "./components/Programmes/Gain";
import Lose from "./components/Programmes/Lose";
import Training from "./components/Programmes/Training";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firstprogramme" element={<Gain />} />
        <Route path="/secondprogramme" element={<Lose />} />
        <Route path="/thirdprogramme" element={<Training />} />
        <Route path="/programmes" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
