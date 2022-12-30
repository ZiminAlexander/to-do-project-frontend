import { createNewElement } from "../../../../../helpers/createNewElement";
import { updateTasksFromServer } from "../task";
import "./delete-task-button.css";

export function createDeleteTaskButton() {
    const newDeleteElement = createNewElement("button", ["circle-button", "x-button", "delete-task-button"]);
    newDeleteElement.addEventListener("click", function(){
        this.disabled = "true";
        deleteTask(this.parentElement.id)
    })

    return newDeleteElement;
}

//Удалить задачу
function deleteTask(id){
    fetch("http://nkbelousov.site:3000/todos/" + id, 
        {method: 'DELETE'})
        .then(updateTasksFromServer)
  }

