import React from "react";
import PropTypes from "prop-types";
import Exercices from "./Exercices";

export default function PrincipalPage({ exercices }) {
  return (
    <div>
      {exercices.map((exercice) => {
        return (
          <Exercices
            title={exercice.title}
            content={exercice.content}
            key={exercice.title}
          />
        );
      })}
    </div>
  );
}
PrincipalPage.propTypes = {
  exercices: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
