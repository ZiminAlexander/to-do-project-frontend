import { createNewElement } from "Project/helpers/createNewElement";
import "./full-text-area-div.css";

export function createFullTextAreaDiv(){
    const fullTextAreaDiv = createNewElement("div", "full-text-area-div");
    const taskEditFullText = createNewElement("textarea", ["task-edit-full-text", "disabled", "text-input"]);
    taskEditFullText.disabled = true;

    fullTextAreaDiv.append(taskEditFullText);

    return fullTextAreaDiv;
}
