import { useEffect, useState } from "react";
import PrincipalPage from "../components/PrincipalPage";

export default function Home() {
  const [exercices, setExercices] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/exercices`
    )
      .then((response) => response.json())
      .then((data) => setExercices(data));
  }, []);

  return <PrincipalPage exercices={exercices} />;
}
