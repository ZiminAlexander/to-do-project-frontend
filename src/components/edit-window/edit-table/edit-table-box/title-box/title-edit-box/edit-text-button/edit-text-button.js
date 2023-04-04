import React from "react";

export function EditTextButton() {

  return(
    <button className="edit-button small-button" 
      onClick={(event) => {
        const editText = event.target.parentElement.firstChild.firstChild;
        editText.disabled = !editText.disabled;
      }}
    />
  );

}
