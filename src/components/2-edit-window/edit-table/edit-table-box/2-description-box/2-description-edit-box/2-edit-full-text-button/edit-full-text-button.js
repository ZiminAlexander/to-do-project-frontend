import { createNewElement } from "Helpers/createNewElement";
import "./edit-full-text-button.css";

export function createEditFullTextButton(){
    const editFullTextButton = createNewElement("button", "edit-full-text-button");
    editFullTextButton.addEventListener("click", editButtonCallback);
    
    return editFullTextButton;
}

//Callback для edit кнопки
function editButtonCallback() {
    const editText = this.parentElement.querySelector("textarea");
    editText.disabled = false;
  }
  