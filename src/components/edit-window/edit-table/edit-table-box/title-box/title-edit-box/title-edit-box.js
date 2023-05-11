import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TextAreaDiv } from "./text-area-div/text-area-div";
import { EditTextButton } from "./edit-text-button/edit-text-button";
import "./title-edit-box.css";

export const TitleEditBox = ({title, setTitle}) => {
  const [isEditable, setIsEditable] = useState(false);
  const toogleIsEditable = () => {
    setIsEditable(!isEditable);
  }

  return(
    <div className="title-edit-box">
      <TextAreaDiv title={title}
        setTitle={setTitle}
        isEditable={isEditable}
      />
      <EditTextButton toogleIsEditable={toogleIsEditable} />
    </div>
  );

}

TitleEditBox.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
}