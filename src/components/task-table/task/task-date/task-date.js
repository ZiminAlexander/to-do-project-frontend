import React from "react";
import "./task-date.css";

export function TaskDate(props) {
  
  return(
    <div className="task-date">
      {props.createdDate}
    </div>
  );

}
