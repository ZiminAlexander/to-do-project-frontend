import React from "react";
import PropTypes from 'prop-types';
import { EditTableBox } from "./edit-table-box/edit-table-box";
import "./edit-table.css";
import "./edit-button.css";

export const EditTable = ({newTitle, setNewTitle, newDescription, 
  setNewDescription, saveEditButtonCallBack, isLoadingSave,
  closeEditButtonCallback}) => {
  
  return (
    <div className="edit-table panel">
      <EditTableBox 
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        saveEditButtonCallBack={saveEditButtonCallBack}
        isLoadingSave={isLoadingSave}
        closeEditButtonCallback={closeEditButtonCallback}
      />
    </div>
  );

}

EditTable.propTypes = {
  newTitle: PropTypes.string.isRequired, 
  setNewTitle: PropTypes.func.isRequired,  
  newDescription: PropTypes.string.isRequired, 
  setNewDescription: PropTypes.func.isRequired, 
  saveEditButtonCallBack: PropTypes.func.isRequired, 
  isLoadingSave: PropTypes.bool.isRequired, 
  closeEditButtonCallback: PropTypes.func.isRequired,
}