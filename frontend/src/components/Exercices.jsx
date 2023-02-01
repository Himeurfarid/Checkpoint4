import React from "react";
import PropTypes from "prop-types";

export default function Exercices({ title, content }) {
  return (
    <div className="DisplayExercices">
      <ul>
        <li>{title}</li>
        <li>Description : {content}</li>
      </ul>
    </div>
  );
}

Exercices.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
