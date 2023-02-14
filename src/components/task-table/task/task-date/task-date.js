import { createNewElement } from "Project/helpers/createNewElement";
import "./task-date.css";

export function createTaskDate() {
  const newTaskDate = createNewElement("div", "task-date");

  return newTaskDate;
}
