import { addTaskTable } from "./components/task-table/task-table";
import { addEditWindow } from "./components/edit-window/edit-window";
import { updateTasksFromServer } from "./components/task-table/task/task";
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

