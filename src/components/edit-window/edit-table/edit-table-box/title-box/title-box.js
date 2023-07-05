import React from "react";
import PropTypes from 'prop-types';
import { TaskEditTitle } from "./task-edit-title/task-edit-title";
import { TitleEditBox } from "./title-edit-box/title-edit-box";

export const TitleBox = ({title, setTitle}) => {

  return(
    <div className="title-box">
      <TaskEditTitle />
      <TitleEditBox title={title}
        setTitle={setTitle}
      />
    </div>
  );

}

TitleBox.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
}
