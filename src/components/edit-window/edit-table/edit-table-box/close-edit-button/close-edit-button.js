import "./close-edit-button.css";
import { createNewElement } from "Project/helpers/createNewElement";
import { showNotification } from "Project/components/notifications/notifications";

export function createCloseEditButton(){
    const closeEditButton = createNewElement("button", ["small-button", "red-button", "close-edit-button"]);
    closeEditButton.textContent = "×";
    closeEditButton.addEventListener("click", closeEditWindowCallback);
    
    return closeEditButton;
}

//Callback для CloseEditButton на нажатие
function closeEditWindowCallback(){
    if (!isChangedInEditWindow()){
      closeEditWindow();
      return;
    }
    showNotification("Внесённые изменения будут удалены. Вы точно хотите выйти?","confirm", closeEditWindow);
}

//Функция для определения, есть ли изменения в EditWindow
export function isChangedInEditWindow(){
    const editedTask = document.querySelector(".edited");
    const editedTaskText = editedTask.querySelector(".text");
    const editedTaskFullText = editedTask.dataset.description;
    const taskEditText = document.querySelector(".task-edit-text");
    const taskEditFullText = document.querySelector(".task-edit-full-text");
    const isEditTask = editedTaskText.textContent === taskEditText.value;
    const isEditDescription = editedTaskFullText === taskEditFullText.value;
  
    return !((isEditTask) && (isEditDescription))
}
  
  
  // Функция, для закрытия окна редактирования
export function closeEditWindow(){
    const editedTask = document.querySelector(".edited");
    const editWindow = document.querySelector(".edit-window");
    editedTask.classList.remove("edited");
    editWindow.classList.add("hidden");

    disableEditTextAreas();
}


  // Сделать поля для редактирования задачи disabled
function disableEditTextAreas(){
    const taskEditText = document.querySelector(".task-edit-text");
    const taskEditFullText = document.querySelector(".task-edit-full-text");
    taskEditText.disabled = true;
    taskEditFullText.disabled = true; 
}