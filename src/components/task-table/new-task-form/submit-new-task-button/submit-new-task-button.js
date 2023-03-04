import { createNewElement } from "Project/helpers/createNewElement";
import { updateTasksFromServer } from "../../task/task";
import { showNotification } from "../../../notifications/notifications";
import { collectTaskData } from "Project/helpers/collectTaskData";
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
  const currentTaskData = collectTaskData();
  newTaskArea.value = "";
  newTaskArea.style.height = "35px";

  api.tasks.submit(currentTaskData).then(() => {
    addSpinner("off", submitNewTaskButton);
    updateTasksFromServer();
  });
}
