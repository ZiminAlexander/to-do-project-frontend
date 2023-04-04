import React from "react";
import { EditTable } from "./edit-table/edit-table";
import "./edit-window.css";

export function EditWindow(props) {
  return(
    <div className="edit-window window">
      <EditTable editedTask={props.editedTask}
        setEditTaskID={props.setEditTaskID}
        updateTasksFromServer={props.updateTasksFromServer}
      />
    </div>
  );
}
