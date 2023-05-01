import React from "react";
import PropTypes from 'prop-types';
import { EditTable } from "./edit-table/edit-table";
import "./edit-window.css";

export const EditWindow = ({newTitle, setNewTitle, newDescription, 
  setNewDescription, saveEditButtonCallBack, isLoadingSave,
  closeEditButtonCallback}) => {
  return(
    <div className="edit-window window">
      <EditTable           
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

EditWindow.propTypes = {
  newTitle: PropTypes.string.isRequired, 
  setNewTitle: PropTypes.func.isRequired,  
  newDescription: PropTypes.string.isRequired, 
  setNewDescription: PropTypes.func.isRequired, 
  saveEditButtonCallBack: PropTypes.func.isRequired, 
  isLoadingSave: PropTypes.bool.isRequired, 
  closeEditButtonCallback: PropTypes.func.isRequired,
}