import React from "react";
import PropTypes from 'prop-types';
import "./text.css";

export function Text({title, currentTaskID, setEditTaskID}) {

  return (
    <div className="text"
      onClick={() => {
        setEditTaskID(currentTaskID);
      }}
    >
      {title}
    </div>
  );

}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  currentTaskID: PropTypes.string.isRequired,
  setEditTaskID: PropTypes.func.isRequired,
}