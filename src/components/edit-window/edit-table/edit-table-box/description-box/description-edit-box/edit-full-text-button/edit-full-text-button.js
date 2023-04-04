import React from "react";

export function EditFullTextButton() {

  return(
    <button className="edit-button small-button" 
      onClick={(event) => {
        const editText = event.target.parentElement.firstChild.firstChild;
        const fullText = event.target.parentElement.firstChild.lastChild;
        fullText.innerHTML = editText.value;
        editText.classList.toggle("no-display");
        fullText.classList.toggle("no-display");
      }}
    />
  );

}
