import { createNewElement } from "Project/helpers/createNewElement";
import { updateTasksFromServer } from "../../task/task";
import { showNotification } from "../../../notifications/notifications";
import { createApiObject } from "Project/helpers/createApiObject";
import { addSpinner } from "../../../../helpers/addSpinner";
import { api } from "Project/api/api";
import "./submit-new-task-button.css";


export function createSubmitNewTaskButton() {
  const submitNewTaskButton = createNewElement("button", [
    "submit-new-task-button",
    "add-button",
    "small-button",
  ]);
  submitNewTaskButton.addEventListener("click", submitTask);
  return submitNewTaskButton;
}

//Отправить задачу на сервер send
export function submitTask() {
  const newTaskArea = document.querySelector(".new-task-area");

  if (newTaskArea.value.trim() === "") {
    showNotification("Нельзя добавить пустую задачу");
    newTaskArea.value = "";
    return;
  }
  const submitNewTaskButton = document.querySelector(".submit-new-task-button");
  addSpinner("on", submitNewTaskButton);
  const currentApiObject = createApiObject();
  newTaskArea.value = "";
  newTaskArea.style.height = "35px";

  api.submit(currentApiObject).then(() => {
    addSpinner("off", submitNewTaskButton);
    updateTasksFromServer();
  });
}
