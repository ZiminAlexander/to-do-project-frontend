import React from "react";
import PropTypes from 'prop-types';
import { TitleBox } from "./title-box/title-box";
import { DescriptionBox } from "./description-box/description-box";
import { SaveEditButton } from "./save-edit-button/save-edit-button";
import { CloseEditButton } from "./close-edit-button/close-edit-button";
import "./edit-table-box.css";

export const EditTableBox = ({editedTask, onChangeEditedTask}) => {
  
  return(
    <div className="edit-table-box">
      <TitleBox title={editedTask.title}
        setTitle={onChangeEditedTask.setTitle}
      />
      <DescriptionBox description={editedTask.description}
        setDescription={onChangeEditedTask.setDescription}
      />
      <SaveEditButton saveEditTask={onChangeEditedTask.saveEditTask}
        isLoadingSave={editedTask.isLoadingSave}
      />
      <CloseEditButton onClose={onChangeEditedTask.onClose} />
    </div>
  );

}

EditTableBox.propTypes = {
  editedTask: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    isLoadingSave: PropTypes.bool,
  }).isRequired,
  onChangeEditedTask: PropTypes.objectOf(
    PropTypes.func
  ).isRequired 
}