import { createNewElement } from "Project/helpers/createNewElement";
import { updateTasksFromServer } from "../task";
import { addSpinner } from "Project/helpers/addSpinner";
import { showNotification } from "Project/components/notifications/notifications";
import "./delete-task-button.css";
import { api } from "Project/api/api";

export function createDeleteTaskButton() {
  const newDeleteElement = createNewElement("button", [
    "small-button",
    "remove-button",
    "delete-task-button",
  ]);
  newDeleteElement.addEventListener("click", function () {
    const currentDeleteButton = this;
    showNotification(
      "Задача будет удалена без возможности восстановления. Вы точно хотите удалить задачу?",
      "confirm",
      () => {
        deleteTask(currentDeleteButton);
      }
    );
  });
  return newDeleteElement;
}

function deleteTask(deleteButton) {
  addSpinner("on", deleteButton);
  deleteButton.disabled = "true";
  api.remove(deleteButton.parentElement.id).then(() => {
    addSpinner("off", deleteButton);
    updateTasksFromServer();
  });
}
