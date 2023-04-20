import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TextAreaDiv } from "./text-area-div/text-area-div";
import { EditTextButton } from "./edit-text-button/edit-text-button";
import "./title-edit-box.css";

export const TitleEditBox = ({newTitle, setNewTitle}) => {
  const [isEditEnable, setIsEditEnable] = useState(false);
  const changeIsEditEnable = () => {
    setIsEditEnable(!isEditEnable);
  }

  return(
    <div className="title-edit-box">
      <TextAreaDiv newTitle={newTitle}
        setNewTitle={setNewTitle}
        isEditEnable={isEditEnable}
      />
      <EditTextButton changeIsEditEnable={changeIsEditEnable} />
    </div>
  );

}

TitleEditBox.propTypes = {
  newTitle: PropTypes.string.isRequired,
  setNewTitle: PropTypes.func.isRequired,
}