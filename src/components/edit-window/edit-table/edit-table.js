import React from "react";
import { EditTableBox } from "./edit-table-box/edit-table-box";
import "./edit-table.css";
import "./edit-button.css";

export function EditTable(props) {
  
  return (
    <div className="edit-table panel">
      <EditTableBox editedTask={props.editedTask}
        setEditTaskID={props.setEditTaskID}
        updateTasksFromServer={props.updateTasksFromServer}
      />
    </div>
  );

}
