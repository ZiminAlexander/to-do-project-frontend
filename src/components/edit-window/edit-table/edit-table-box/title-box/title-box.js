import React from "react";
import PropTypes from 'prop-types';
import { TaskEditTitle } from "./task-edit-title/task-edit-title";
import { TitleEditBox } from "./title-edit-box/title-edit-box";

export const TitleBox = ({newTitle, setNewTitle}) => {

  return(
    <div className="title-box">
      <TaskEditTitle />
      <TitleEditBox newTitle={newTitle}
        setNewTitle={setNewTitle}
      />
    </div>
  );

}

TitleBox.propTypes = {
  newTitle: PropTypes.string.isRequired,
  setNewTitle: PropTypes.func.isRequired,
}
