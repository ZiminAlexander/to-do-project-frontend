import React from "react";
import PropTypes from 'prop-types';
import { TaskEditFullTextTitle } from "./task-edit-full-text-title/task-edit-full-text-title";
import { DescriptionEditBox } from "./description-edit-box/description-edit-box";

export const DescriptionBox = ({description, setDescription}) => {

  return(
    <div className="description-box">
      <TaskEditFullTextTitle />
      <DescriptionEditBox description={description}
        setDescription={setDescription}
      />
    </div>
  );

}

DescriptionBox.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
}
