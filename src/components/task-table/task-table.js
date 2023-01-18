import {createNewElement} from "Project/helpers/createNewElement.js";
import { createSearchForm } from "./search-form/search-form";
import { createNewTaskForm } from "./new-task-form/new-task-form.js";
import "./task-table.css";
import "./form-style.css";

export function addTaskTable(){
    const taskPage = document.querySelector(".task-page");
    const taskTable = createNewElement("div", "task-table");
    const searchForm = createSearchForm();
    const newTaskForm = createNewTaskForm();
    taskTable.append(searchForm);
    taskTable.append(newTaskForm);
    taskPage.append(taskTable);
}