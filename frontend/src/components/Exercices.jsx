import React from "react";
import PropTypes from "prop-types";

export default function Exercices({ title, content }) {
  return (
    <div className="DisplayExercices">
      <div>
        <h2>{title}</h2>
        <p>Description : {content}</p>
      </div>
    </div>
  );
}

Exercices.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
