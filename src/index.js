import { addHeader } from "./components/1-header/header";
import { addFooter } from "./components/3-footer/footer";
import { addTaskPage } from "./components/2-task-page/task-page";
import { addEditWindow } from "./components/4-edit-window/edit-window";
import { updateTasksFromServer } from "./components/2-task-page/task-table/3-task/task";
import "./buttons.css"
import "./index.css";

//Собираем страницу 
addHeader();
addTaskPage();
addFooter();
addEditWindow();

updateTasksFromServer();

