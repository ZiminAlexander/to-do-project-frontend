import "./close-edit-button.css";
import { createNewElement } from "Project/helpers/createNewElement";

export function createCloseEditButton(){
    const closeEditButton = createNewElement("button", ["small-button", "red-button", "close-edit-button"]);
    closeEditButton.textContent = "×";
    closeEditButton.addEventListener("click", closeEditWindowCallback);
    
    return closeEditButton;
}

//Callback для CloseEditButton на нажатие
function closeEditWindowCallback(){
    if (!isChangedInEditWindow() || confirm("Внесённые изменения будут удалены. Вы точно хотите выйти?")){
      closeEditWindow();
      return;
    }
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
    const taskFullText = document.querySelector(".task-full-text");
    taskEditText.disabled = true;
    taskEditFullText.classList.add("no-display");
    taskFullText.classList.remove("no-display"); 
}