import "./save-edit-button.css";
import { createNewElement } from "Helpers/createNewElement";
import { isChangedInEditWindow } from "../4-close-edit-button/close-edit-button";
import { closeEditWindow } from "../4-close-edit-button/close-edit-button";
import { updateTask } from "../../../../1-task-table/3-task/task";

export function createSaveEditButton(){
    const saveEditButton = createNewElement("button", "save-edit-button");
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
    //Меняем параметры задачи
    editedTaskText.textContent = taskEditText.value;
    editedTask.dataset.description = taskEditFullText.value;
    //Отправляем на сервер и закрываем окно
    updateTask(editedTask);
    closeEditWindow();
}