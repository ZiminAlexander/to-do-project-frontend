import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TextAreaDiv } from "./text-area-div/text-area-div";
import { EditTextButton } from "./edit-text-button/edit-text-button";
import "./title-edit-box.css";

export function TitleEditBox({editTitle, setTitle}) {
  const [isEditEnable, setIsEditEnable] = useState(false);
  return(
    <div className="title-edit-box">
      <TextAreaDiv editTitle={editTitle}
        setTitle={setTitle}
        isEditEnable={isEditEnable}
      />
      <EditTextButton setIsEditEnable={setIsEditEnable}
        isEditEnable={isEditEnable}
      />
    </div>
  );

}

TitleEditBox.propTypes = {
  editTitle: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
}