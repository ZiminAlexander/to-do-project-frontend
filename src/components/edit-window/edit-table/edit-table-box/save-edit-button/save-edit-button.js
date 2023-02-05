import "./save-edit-button.css";
import { createNewElement } from "Project/helpers/createNewElement";
import { isChangedInEditWindow } from "../close-edit-button/close-edit-button";
import { closeEditWindow } from "../close-edit-button/close-edit-button";
import { updateTask } from "../../../../task-table/task/task";
import { addSpinner } from "Project/helpers/addSpinner";

export function createSaveEditButton(){
    const saveEditButton = createNewElement("button", ["save-edit-button", "big-button"]);
    saveEditButton.innerHTML = "Сохранить и выйти";
    saveEditButton.addEventListener("click", saveEditButtonCallback);

    return saveEditButton;
}

//Callback для SaveEditButton на нажатие
function saveEditButtonCallback(){
    if (!isChangedInEditWindow()){
      closeEditWindow();
      return;
    }
    const editedTask = document.querySelector(".edited");
    const editedTaskText = editedTask.querySelector(".text");
    const taskEditText = document.querySelector(".task-edit-text");
    const taskEditFullText = document.querySelector(".task-edit-full-text");
    const saveEditButton = document.querySelector(".save-edit-button");
    //Меняем параметры задачи
    editedTaskText.textContent = taskEditText.value;
    editedTask.dataset.description = taskEditFullText.value;
    //Отправляем на сервер и закрываем окно
    addSpinner("on", saveEditButton);
    updateTask(editedTask)
    .then(() => {
      addSpinner("off", saveEditButton);
      closeEditWindow();
    })
}