import React from "react";
import PropTypes from 'prop-types';
import { TaskEditFullTextTitle } from "./task-edit-full-text-title/task-edit-full-text-title";
import { DescriptionEditBox } from "./description-edit-box/description-edit-box";

export const DescriptionBox = ({newDescription, setNewDescription}) => {

  return(
    <div className="description-box">
      <TaskEditFullTextTitle />
      <DescriptionEditBox newDescription={newDescription}
        setNewDescription={setNewDescription}
      />
    </div>
  );

}

DescriptionBox.propTypes = {
  newDescription: PropTypes.string.isRequired,
  setNewDescription: PropTypes.func.isRequired,
}
