import { createNewElement } from "Project/helpers/createNewElement";
import "./text.css";

export function createText() {
    const newTextElement = createNewElement("div", "text");
    newTextElement.addEventListener("click", textOnclickCallback);

    return newTextElement;
}

//Callback для text на нажатие
function textOnclickCallback() {
        const taskElement = this.parentElement;
        const taskTextElement = taskElement.querySelector(".text");
        const editWindow = document.querySelector(".edit-window");
        const taskEditText = document.querySelector(".task-edit-text");
        const taskFullText = document.querySelector(".task-full-text");
        const taskEditFullText = document.querySelector(".task-edit-full-text");
        editWindow.classList.remove("hidden");
        taskEditText.value = taskTextElement.textContent;
        taskFullText.innerHTML = taskElement.dataset.description;
        taskEditFullText.value = taskElement.dataset.description;
        taskElement.classList.add("edited");   
}
