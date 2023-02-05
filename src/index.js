import { addTaskTable } from "./components/task-table/task-table";
import { addEditWindow } from "./components/edit-window/edit-window";
import { updateTasksFromServer } from "./components/task-table/task/task";
import "./index.html";
import "./main-styles/buttons.css";
import "./main-styles/index.css";
import "./main-styles/footer.css";
import "./main-styles/header.css";
import "./main-styles/task-page.css";
import "./main-styles/panel.css";
import "./main-styles/text-input.css";

//Собираем страницу 

addTaskTable();
addEditWindow();

updateTasksFromServer();

