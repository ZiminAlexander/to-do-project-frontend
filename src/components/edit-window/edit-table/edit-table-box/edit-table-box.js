import React from "react";
import PropTypes from 'prop-types';
import { TitleBox } from "./title-box/title-box";
import { DescriptionBox } from "./description-box/description-box";
import { SaveEditButton } from "./save-edit-button/save-edit-button";
import { CloseEditButton } from "./close-edit-button/close-edit-button";
import "./edit-table-box.css";

export const EditTableBox = ({newTitle, setNewTitle, newDescription, 
  setNewDescription, saveEditButtonCallBack, isLoadingSave,
  closeEditButtonCallback}) => {
  
  return(
    <div className="edit-table-box">
      <TitleBox newTitle={newTitle}
        setNewTitle={setNewTitle}
      />
      <DescriptionBox newDescription={newDescription}
        setNewDescription={setNewDescription}
      />
      <SaveEditButton saveEditButtonCallBack={saveEditButtonCallBack}
        isLoadingSave={isLoadingSave}
      />
      <CloseEditButton closeEditButtonCallback={closeEditButtonCallback} />
    </div>
  );

}

EditTableBox.propTypes = {
  newTitle: PropTypes.string.isRequired, 
  setNewTitle: PropTypes.func.isRequired,  
  newDescription: PropTypes.string.isRequired, 
  setNewDescription: PropTypes.func.isRequired, 
  saveEditButtonCallBack: PropTypes.func.isRequired, 
  isLoadingSave: PropTypes.bool.isRequired, 
  closeEditButtonCallback: PropTypes.func.isRequired,
}