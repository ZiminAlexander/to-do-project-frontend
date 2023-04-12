import React from "react";
import PropTypes from 'prop-types';
import { TaskEditTitle } from "./task-edit-title/task-edit-title";
import { TitleEditBox } from "./title-edit-box/title-edit-box";

export function TitleBox({editTitle, setTitle}) {

  return(
    <div className="title-box">
      <TaskEditTitle />
      <TitleEditBox editTitle={editTitle}
        setTitle={setTitle}
      />
    </div>
  );

}

TitleBox.propTypes = {
  editTitle: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
}
