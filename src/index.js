import { addTaskTable } from "./components/1-task-table/task-table";
import { addEditWindow } from "./components/2-edit-window/edit-window";
import { updateTasksFromServer } from "./components/1-task-table/3-task/task";
import "./index.html";
import "./buttons.css";
import "./index.css";
import "./footer.css";
import "./header.css";
import "./task-page.css";

//Собираем страницу 

addTaskTable();
addEditWindow();

updateTasksFromServer();

