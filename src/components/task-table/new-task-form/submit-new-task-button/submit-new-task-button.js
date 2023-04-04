import React from "react";
import "./submit-new-task-button.css";

export function SubmitNewTaskButton(props) {

  return (
    <button className="submit-new-task-button add-button small-button" 
      onClick={(event) => props.submitTask(event)}
    />
  );

}


