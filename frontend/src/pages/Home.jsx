import { useEffect, useState } from "react";
import PrincipalPage from "../components/PrincipalPage";
import Header from "../components/Header";

export default function Home() {
  const [exercices, setExercices] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/exercices`
    )
      .then((response) => response.json())
      .then((data) => setExercices(data));
  }, []);

  return (
    <div>
      <Header />
      <PrincipalPage exercices={exercices} />
    </div>
  );
}
