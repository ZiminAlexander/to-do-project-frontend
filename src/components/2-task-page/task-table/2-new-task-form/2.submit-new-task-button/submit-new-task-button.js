import { createNewElement } from "../../../../../helpers/createNewElement";
import { updateTasksFromServer } from "../../3-task/task";
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
      return;
    }
    const submitTaskObject = {};
    let submitString = "";
    submitTaskObject.title = newTaskArea.value;
    submitTaskObject.isCompleted = false;
    submitTaskObject.description = "";
    submitString = JSON.stringify(submitTaskObject);
    submitTaskObject.id = ""
    newTaskArea.value = '';
    newTaskArea.style.height = "35px";
     
    fetch('http://nkbelousov.site:3000/todos/', 
    { headers: {'Content-Type': 'application/json'}, 
      method: 'POST', 
      body: submitString
      }
    ).then(updateTasksFromServer);
  }
  