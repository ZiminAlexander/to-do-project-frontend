import React from "react";
import PropTypes from 'prop-types';
import "./delete-task-button.css";

export const DeleteTaskButton = ({deleteTask, isLoadingDelete}) => {

  return (
    <button className={`small-button remove-button delete-task-button ${isLoadingDelete ? " loading-spinner" : ""}`}
      onClick={() => {
          deleteTask();
        }
      }
    />
  );

}

DeleteTaskButton.propTypes = {
  deleteTask: PropTypes.func.isRequired, 
  isLoadingDelete: PropTypes.bool,
}
