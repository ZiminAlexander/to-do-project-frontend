import { createNewElement } from "../../../../../helpers/createNewElement";
import { submitTask } from "../2.submit-new-task-button/submit-new-task-button";
import "./new-task-area.css";

export function createNewTaskArea (){
    const inputTextDiv = createNewElement("div", "input-text-div");
    const newTaskArea = createNewElement("textarea", "new-task-area");
    newTaskArea.placeholder = "Новая задача";
    newTaskArea.addEventListener("keydown", enterButtonForNewTaskAreaCallback);
    newTaskArea.addEventListener("input", autoSizeNewTaskAreaCallback);
    inputTextDiv.append(newTaskArea);
    return inputTextDiv;
}

//Callback для поля ввода на нажатие "Enter"
function enterButtonForNewTaskAreaCallback(event){
    // Если кнопка не 'Enter' выйти
    if (event.keyCode !== 13) {return;}
    event.preventDefault();
    submitTask();
}

//Callback для автоизменения размера для submit-text textarea
function autoSizeNewTaskAreaCallback(){      
    if(this.clientHeight < this.scrollHeight){
      this.style.height = this.scrollHeight + "px";
    } else if (this.clientHeight > this.scrollHeight){
      this.style.height = this.scrollHeight + "px";
    }
}