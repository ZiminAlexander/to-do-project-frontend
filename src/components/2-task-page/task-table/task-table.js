import {createNewElement} from "../../../helpers/createNewElement.js";
import { createSearchForm } from "./1-search-form/search-form";
import { createNewTaskForm } from "./2-new-task-form/new-task-form.js";
import "./task-table.css";
import "./form-style.css";

export function createTaskTable(){
    const taskTable = createNewElement("div", "task-table");
    const searchForm = createSearchForm();
    const newTaskForm = createNewTaskForm();
    taskTable.append(searchForm);
    taskTable.append(newTaskForm);
    return taskTable;
}
