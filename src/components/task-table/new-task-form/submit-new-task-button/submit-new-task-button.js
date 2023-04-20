import React from "react";
import PropTypes from 'prop-types';
import "./submit-new-task-button.css";

export const SubmitNewTaskButton = ({submitTask, isLoadingNewTask}) => {

  return (
    <button className={"submit-new-task-button add-button small-button" + (isLoadingNewTask? " loading-spinner" : "")}
      onClick={(event) => submitTask(event)}
    />
  );

}

SubmitNewTaskButton.propTypes = {
  submitTask: PropTypes.func.isRequired, 
  isLoadingNewTask: PropTypes.bool,
}


