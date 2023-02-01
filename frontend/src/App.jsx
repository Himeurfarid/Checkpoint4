import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeProgrammes from "./components/Programmes/HomeProgrammes";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programmes" element={<HomeProgrammes />} />
    </Routes>
  );
}

export default App;
