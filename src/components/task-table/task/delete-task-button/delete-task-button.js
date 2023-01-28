import { createNewElement } from "Project/helpers/createNewElement";
import { updateTasksFromServer } from "../task";
import { talkWithServer } from "Project/api/talkWithServer";
import { addSpinner } from "Project/helpers/addSpinner";
import "./delete-task-button.css";

export function createDeleteTaskButton() {
    const newDeleteElement = createNewElement("button", ["circle-button", "x-button", "delete-task-button"]);
    newDeleteElement.addEventListener("click", function(){
        addSpinner("on",this)
        this.disabled = "true";
        talkWithServer("DELETE", this.parentElement)
        .then(() => {
            addSpinner("off",this);
            updateTasksFromServer();
        });
    })

    return newDeleteElement;
}


