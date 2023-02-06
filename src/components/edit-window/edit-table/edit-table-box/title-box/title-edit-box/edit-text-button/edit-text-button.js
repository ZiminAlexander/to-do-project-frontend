import { createNewElement } from "Project/helpers/createNewElement";

export function createEditTextButton(){
    const editTextButton = createNewElement("button", ["edit-button", "small-button"]);
    editTextButton.addEventListener("click", editButtonCallback);

    return editTextButton;
}

function editButtonCallback() {
    const editText = this.parentElement.querySelector("textarea");
    if (editText.disabled) {
        editText.disabled = false;
    } else {
        editText.disabled = true; 
    }
  }