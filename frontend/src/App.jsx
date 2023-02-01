import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu/Menu";
import ProgrammeGain from "./components/Programmes/ProgrammesGain";
import ProgrammeLose from "./components/Programmes/ProgrammesLose";
import ProgrammeSimpleTraining from "./components/Programmes/ProgrammesSimpleTraining";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programmes" element={<Menu />} />
      <Route path="/firstprogramme" element={<ProgrammeGain />} />
      <Route path="/secondprogramme" element={<ProgrammeLose />} />
      <Route path="/thirdprogramme" element={<ProgrammeSimpleTraining />} />
    </Routes>
  );
}

export default App;
