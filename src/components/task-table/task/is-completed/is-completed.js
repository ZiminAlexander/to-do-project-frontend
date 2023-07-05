import React from "react";
import PropTypes from 'prop-types';
import "./is-completed.css";

export const IsCompletedCheckbox = ({isCompleted, changeIsComplete}) => {

  return (
    <input className="is-completed"
      onClick={() => {
        changeIsComplete()
      }}
      type="checkbox"
      defaultChecked={isCompleted}
    />
  );
}

IsCompletedCheckbox.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  changeIsComplete: PropTypes.func.isRequired,
}