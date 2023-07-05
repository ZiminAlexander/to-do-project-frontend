import React from "react";
import PropTypes from 'prop-types';
import "./submit-new-task-button.css";

export const SubmitNewTaskButton = ({submitTaskCallback, isLoadingNewTask}) => {

  return (
    <button className={`submit-new-task-button add-button small-button ${isLoadingNewTask? " loading-spinner" : ""}`}
      onClick={() => {
          submitTaskCallback();
        }
      }
    />
  );

}

SubmitNewTaskButton.propTypes = {
  submitTaskCallback: PropTypes.func.isRequired, 
  isLoadingNewTask: PropTypes.bool,
}


