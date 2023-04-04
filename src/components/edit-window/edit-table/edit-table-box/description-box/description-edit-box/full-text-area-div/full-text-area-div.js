import React from "react";
import "./full-text-area-div.css";

export function FullTextAreaDiv(props) {

  return(
    <div className="full-text-area-div">
      <textarea className="task-edit-full-text text-input no-display"
        onChange={(event) => {
          const newDescription = event.target.value;
          props.setDescription(newDescription);
        }}
      >
        {props.editedTask.description}
      </textarea>
      <div className="task-full-text text-input"
        dangerouslySetInnerHTML={{__html: props.editedTask.description}}
      >
      </div>
    </div>
  );

}
