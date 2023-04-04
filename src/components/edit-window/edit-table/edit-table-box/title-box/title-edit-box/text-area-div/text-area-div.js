import React from "react";
import "./text-area-div.css";

export function TextAreaDiv(props) {

  return(
    <div className="text-area-div">
      <textarea className="task-edit-text disabled text-input" 
        disabled={true}
        onChange={(event) => {
          const newTitle = event.target.value;
          props.setTitle(newTitle);
        }}
      >
        {props.editedTask.title}
      </textarea> 
    </div>
  );
  
}
