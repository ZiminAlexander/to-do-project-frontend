import React from "react";
import PropTypes from 'prop-types';
import { EditTable } from "./edit-table/edit-table";
import "./edit-window.css";

export function EditWindow({editedTask, setEditTaskID, updateTasksFromServer}) {
  return(
    <div className="edit-window window">
      <EditTable editedTask={editedTask}
        setEditTaskID={setEditTaskID}
        updateTasksFromServer={updateTasksFromServer}
      />
    </div>
  );
}

EditWindow.propTypes = {
  editedTask: PropTypes.object.isRequired, 
  setEditTaskID: PropTypes.func.isRequired, 
  updateTasksFromServer: PropTypes.func.isRequired,
}