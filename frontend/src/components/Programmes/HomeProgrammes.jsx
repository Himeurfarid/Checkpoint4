import ProgrammesGain from "./ProgrammesGain";
import ProgrammesLose from "./ProgrammesLose";
import ProgrammesSimpleTraining from "./ProgrammesSimpleTraining";
import Header from "../Header";

export default function HomeProgramme() {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <ProgrammesGain />
        </li>
        <li>
          <ProgrammesLose />
        </li>
        <li>
          <ProgrammesSimpleTraining />
        </li>
      </ul>
    </div>
  );
}
