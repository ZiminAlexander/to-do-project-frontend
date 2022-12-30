import {createNewElement} from "../../helpers/createNewElement";
import {createTaskTable} from "./task-table/task-table";
import "./task-page.css";

export function addTaskPage(){
    const taskPage = createNewElement("div", "task-page");
    const taskTable = createTaskTable();
    
    taskPage.append(taskTable);
    document.body.append(taskPage);
}
