import React from "react";
import PropTypes from 'prop-types';
import { TaskEditFullTextTitle } from "./task-edit-full-text-title/task-edit-full-text-title";
import { DescriptionEditBox } from "./description-edit-box/description-edit-box";

export function DescriptionBox({editDescription, setDescription, getNewDescription}) {

  return(
    <div className="description-box">
      <TaskEditFullTextTitle />
      <DescriptionEditBox editDescription={editDescription}
        setDescription={setDescription}
        getNewDescription={getNewDescription}
      />
    </div>
  );

}

DescriptionBox.propTypes = {
  editDescription: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  getNewDescription: PropTypes.func.isRequired,
}
