import { createNewElement } from "Helpers/createNewElement";
import "./text-area-div.css";

export function createTextAreaDiv(){
    const textAreaDiv = createNewElement("div", "text-area-div");
    const taskEditText = createNewElement("textarea", ["task-edit-text", "disabled"]);
    taskEditText.disabled = true;
    textAreaDiv.append(taskEditText);

    return textAreaDiv;
}
