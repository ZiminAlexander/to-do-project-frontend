import { createNewElement } from "Helpers/createNewElement";
import { updateTasksFromServer } from "../../3-task/task";
import { talkWithServer } from "Api/talkWithServer";
import { showNotification } from "../../../3-notifications/notifications";
import { createFetchObject } from "Helpers/createFetchObject";
import "./submit-new-task-button.css";

export function createSubmitNewTaskButton() {
    const submitNewTaskButton = createNewElement("button", 
        ["submit-new-task-button", "plus-button", "circle-button"]);
    submitNewTaskButton.addEventListener("click", submitTask);
    return submitNewTaskButton;
}

//Отправить задачу на сервер send 
export function submitTask(){
    const newTaskArea = document.querySelector(".new-task-area");
    if (newTaskArea.value.trim() === ''){
      showNotification("Нельзя добавить пустую задачу");
      newTaskArea.value = '';
      return;
    }
   
    const currentFetchObject = createFetchObject(); 
    talkWithServer("POST", currentFetchObject)
    
    .then(() => {
      updateTasksFromServer();
      newTaskArea.value = '';
      newTaskArea.style.height = "35px";
      }
    );
  }
  