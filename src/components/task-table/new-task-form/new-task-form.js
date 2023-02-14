import { createNewElement } from "Project/helpers/createNewElement.js";
import { createNewTaskArea } from "./new-task-area/new-task-area.js";
import { createSubmitNewTaskButton } from "./submit-new-task-button/submit-new-task-button.js";
import "./new-task-form.css";

export function createNewTaskForm() {
  const newTaskForm = createNewElement("div", [
    "form",
    "new-task-form",
    "panel",
  ]);
  const newTaskArea = createNewTaskArea();
  const submitNewTaskButton = createSubmitNewTaskButton();

  newTaskForm.append(newTaskArea);
  newTaskForm.append(submitNewTaskButton);

  return newTaskForm;
}
