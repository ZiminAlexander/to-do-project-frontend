import React from "react";
import "./text.css";

export function Text(props) {

  return (
    <div className="text"
      onClick={(event) => {
        const taskTextElement = event.target;
        const taskElement = taskTextElement.parentElement;
        props.setEditTaskID(taskElement.id);
      }}
    >
      {props.title}
    </div>
  );

}
