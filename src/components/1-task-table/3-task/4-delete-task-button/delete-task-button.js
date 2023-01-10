import { createNewElement } from "Helpers/createNewElement";
import { updateTasksFromServer } from "../task";
import { talkWithServer } from "Api/talkWithServer";
import "./delete-task-button.css";

export function createDeleteTaskButton() {
    const newDeleteElement = createNewElement("button", ["circle-button", "x-button", "delete-task-button"]);
    newDeleteElement.addEventListener("click", function(){
        this.disabled = "true";
        talkWithServer("DELETE", this.parentElement)
        .then(updateTasksFromServer);
    })

    return newDeleteElement;
}


