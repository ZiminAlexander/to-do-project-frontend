import { createNewElement } from "Helpers/createNewElement";
import "./full-text-area-div.css";

export function createFullTextAreaDiv(){
    const fullTextAreaDiv = createNewElement("div", "full-text-area-div");
    const taskEditFullText = createNewElement("textarea", ["task-edit-full-text", "disabled"]);
    taskEditFullText.disabled = true;

    fullTextAreaDiv.append(taskEditFullText);

    return fullTextAreaDiv;
}
