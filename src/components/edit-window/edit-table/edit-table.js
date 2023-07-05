import React from "react";
import PropTypes from 'prop-types';
import { EditTableBox } from "./edit-table-box/edit-table-box";
import "./edit-table.css";
import "./edit-button.css";

export const EditTable = ({editedTask, onChangeEditedTask}) => {
  
  return (
    <div className="edit-table panel">
      <EditTableBox 
        editedTask={editedTask}
        onChangeEditedTask={onChangeEditedTask}
      />
    </div>
  );

}

EditTable.propTypes = {
  editedTask: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    isLoadingSave: PropTypes.bool,
  }).isRequired,
  onChangeEditedTask: PropTypes.objectOf(
    PropTypes.func
  ).isRequired 
}