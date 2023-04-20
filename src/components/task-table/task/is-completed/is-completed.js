import React from "react";
import PropTypes from 'prop-types';
import { api } from "Project/api/api.js"
import "./is-completed.css";

export const IsCompletedCheckbox = ({isCompleted, getEditedTask, updateTasksFromServer, currentTaskID}) => {
  const updateTask = (currentTaskID) => {
    const editedTask = getEditedTask(currentTaskID);
    editedTask.data.isCompleted = !editedTask.data.isCompleted;
    return api.tasks.update(editedTask);
  }
  return (
    <input className="is-completed"
      onClick={() => {
        updateTask(currentTaskID)
        .then(updateTasksFromServer)
      }}
      type="checkbox"
      defaultChecked={isCompleted}
    />
  );
}

IsCompletedCheckbox.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  getEditedTask: PropTypes.func.isRequired,
  updateTasksFromServer: PropTypes.func.isRequired,
  currentTaskID: PropTypes.string.isRequired
}