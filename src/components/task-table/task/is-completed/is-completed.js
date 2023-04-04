import React from "react";
import { api } from "Project/api/api.js"
import "./is-completed.css";

export function IsCompletedCheckbox(props) {
  const updateTask = (currentTask) => {
    const editedTask = props.getEditedTask(currentTask.id);
    const updatedTask = {
      id: editedTask.id, 
      data: {
        title: editedTask.title,
        isCompleted: editedTask.isCompleted, 
        description: editedTask.description}
    }
    return api.tasks.update(updatedTask);
  }
  return (
    <input className="is-completed"
      onClick={(event) => {
        const taskElement = event.target.parentElement;
        taskElement.classList.toggle("complete-task");
        updateTask(taskElement);
      }}
      type="checkbox"
      defaultChecked={props.isCompleted}
    />
  );
}

