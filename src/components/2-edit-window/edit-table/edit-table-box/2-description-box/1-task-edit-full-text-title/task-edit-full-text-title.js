import { createNewElement } from "Helpers/createNewElement";
import "./task-edit-full-text-title.css"
export function createTaskEditFullTextTitle(){
    const taskEditFullTextTitle = createNewElement("div", "task-edit-full-text-title");
    taskEditFullTextTitle.innerHTML = "Описание";

    return taskEditFullTextTitle;
}