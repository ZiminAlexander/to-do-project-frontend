import { createNewElement } from "Project/helpers/createNewElement";
import { updateTasksFromServer } from "../task";
import { talkWithServer } from "Project/api/talkWithServer";
import { addSpinner } from "Project/helpers/addSpinner";
import {showNotification} from "Project/components/notifications/notifications";
import "./delete-task-button.css";

export function createDeleteTaskButton() {
    const newDeleteElement = createNewElement("button", ["small-button", "remove-button", "delete-task-button"]);
    newDeleteElement.addEventListener("click", function(){
        const currentDeleteButton = this;
        showNotification("Задача будет удалена без возможности восстановления. Вы точно хотите удалить задачу?",
        "confirm", () => {deleteTask(currentDeleteButton);});
    })
    return newDeleteElement;
}

function deleteTask(deleteButton){
    addSpinner("on", deleteButton)
    deleteButton.disabled = "true";
    talkWithServer("DELETE", deleteButton.parentElement)
    .then(() => {
        addSpinner("off",deleteButton);
        updateTasksFromServer();
    });
}
