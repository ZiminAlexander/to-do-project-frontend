import React from "react";
import PropTypes from 'prop-types';
import { EditTableBox } from "./edit-table-box/edit-table-box";
import "./edit-table.css";
import "./edit-button.css";

export const EditTable = ({editedTask, setEditTaskID, updateTasksFromServer}) => {
  
  return (
    <div className="edit-table panel">
      <EditTableBox editedTask={editedTask}
        setEditTaskID={setEditTaskID}
        updateTasksFromServer={updateTasksFromServer}
      />
    </div>
  );

}

EditTable.propTypes = {
  editedTask: PropTypes.object.isRequired, 
  setEditTaskID: PropTypes.func.isRequired, 
  updateTasksFromServer: PropTypes.func.isRequired,
}
