import "./close-edit-button.css";
import { createNewElement } from "../../../../../helpers/createNewElement";

export function createCloseEditButton(){
    const closeEditButton = createNewElement("button", ["circle-button", "x-button", "close-edit-button", "hidden-after"]);
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
    const closeEditButton = editWindow.querySelector(".close-edit-button");
    closeEditButton.classList.add("hidden-after");
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