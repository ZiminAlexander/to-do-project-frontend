import { createNewElement } from "Helpers/createNewElement";
import "./edit-text-button.css";

export function createEditTextButton(){
    const editTextButton = createNewElement("button", "edit-text-button");
    editTextButton.addEventListener("click", editButtonCallback);

    return editTextButton;
}

function editButtonCallback() {
    const editText = this.parentElement.querySelector("textarea");
    editText.disabled = false;
  }