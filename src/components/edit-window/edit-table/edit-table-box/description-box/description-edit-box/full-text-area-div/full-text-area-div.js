import { createNewElement } from "Project/helpers/createNewElement";
import "./full-text-area-div.css";

export function createFullTextAreaDiv() {
  const fullTextAreaDiv = createNewElement("div", "full-text-area-div");
  const taskEditFullText = createNewElement("textarea", [
    "task-edit-full-text",
    "text-input",
  ]);
  const taskFullText = createNewElement("div", [
    "task-full-text",
    "text-input",
  ]);
  taskEditFullText.classList.add("no-display");

  fullTextAreaDiv.append(taskEditFullText);
  fullTextAreaDiv.append(taskFullText);

  return fullTextAreaDiv;
}
