import { createNewElement } from "Project/helpers/createNewElement";

export function createEditFullTextButton(){
    const editFullTextButton = createNewElement("button", ["edit-button", "small-button"]);
    editFullTextButton.addEventListener("click", editButtonCallback);
    
    return editFullTextButton;
}

//Callback для edit кнопки
function editButtonCallback() {
    const editText = this.parentElement.querySelector("textarea");
    editText.disabled = false;
  }
  