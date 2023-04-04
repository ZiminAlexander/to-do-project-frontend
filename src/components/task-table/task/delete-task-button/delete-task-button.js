import React from "react";
import { addSpinner } from "Project/helpers/addSpinner";
import { showNotification } from "Project/components/notifications/notifications";
import "./delete-task-button.css";
import { api } from "Project/api/api";

export function DeleteTaskButton(props) {
  
  const deleteTask = (deleteButton) => {
    addSpinner("on", deleteButton);
    deleteButton.disabled = "true";
    api.tasks.remove(deleteButton.parentElement.id).then(() => {
      addSpinner("off", deleteButton);
      props.updateTasksFromServer();
    });
  }


  return (
    <button className="small-button remove-button delete-task-button"
      onClick={(event) => {
        const currentDeleteButton = event.target;
        showNotification(
          "Задача будет удалена без возможности восстановления. Вы точно хотите удалить задачу?",
          "center-confirm",
          () => {
            deleteTask(currentDeleteButton);
          }
        );
      }}
    />
  );

}


