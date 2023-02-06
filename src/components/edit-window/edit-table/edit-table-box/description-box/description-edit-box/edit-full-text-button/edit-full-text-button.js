import { createNewElement } from "Project/helpers/createNewElement";

export function createEditFullTextButton(){
    const editFullTextButton = createNewElement("button", ["edit-button", "small-button"]);
    editFullTextButton.addEventListener("click", editButtonCallback);
    
    return editFullTextButton;
}

//Callback для edit кнопки
function editButtonCallback() {
    const editText = this.parentElement.querySelector(".task-edit-full-text");
    const fullText = this.parentElement.querySelector(".task-full-text");
    fullText.innerHTML = editText.value;
    editText.classList.toggle("no-display");
    fullText.classList.toggle("no-display");
}
  