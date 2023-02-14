import { createNewElement } from "Project/helpers/createNewElement";
import { updateTask } from "../task";
import "./is-completed.css";

export function createIsCompleted() {
  const newCheckBoxElement = createNewElement("input", "is-completed");
  newCheckBoxElement.addEventListener("click", isCompleteOnlickCallback);

  return newCheckBoxElement;
}

//Callback для checkbox на нажатие
function isCompleteOnlickCallback() {
  const taskElement = this.parentElement;
  taskElement.classList.toggle("complete-task");
  updateTask(taskElement);
}
