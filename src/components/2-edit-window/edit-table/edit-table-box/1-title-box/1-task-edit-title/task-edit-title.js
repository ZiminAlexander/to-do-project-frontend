import "./task-edit-title.css";
import { createNewElement } from "Helpers/createNewElement";

export function createTaskEditTitle(){
    const taskEditTitle = createNewElement("div", "task-edit-title");
    taskEditTitle.innerHTML = "Краткое содержание";

    return taskEditTitle;
}