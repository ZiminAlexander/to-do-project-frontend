import React from "react";
import PropTypes from 'prop-types';
import { EditTable } from "./edit-table/edit-table";
import "./edit-window.css";

export const EditWindow = ({editedTask, onChangeEditedTask}) => {
  return(
    <div className="edit-window window">
      <EditTable           
        editedTask={editedTask}
        onChangeEditedTask={onChangeEditedTask}
      />
    </div>
  );
}

EditWindow.propTypes = {
  editedTask: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    isLoadingSave: PropTypes.bool,
  }).isRequired,
  onChangeEditedTask: PropTypes.objectOf(
    PropTypes.func
  ).isRequired 
}