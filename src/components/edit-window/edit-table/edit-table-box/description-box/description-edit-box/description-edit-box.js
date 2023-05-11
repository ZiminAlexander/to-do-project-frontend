import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FullTextAreaDiv } from "./full-text-area-div/full-text-area-div";
import { EditFullTextButton } from "./edit-full-text-button/edit-full-text-button";
import "./description-edit-box.css";

export const DescriptionEditBox = ({description, setDescription}) => {

  const [isEditable, setIsEditable] = useState(false);
  const toogleIsEditable = () => {
    setIsEditable(!isEditable);
  }

  return(
    <div className="description-edit-box">
      <FullTextAreaDiv description={description}
         setDescription={setDescription}
         isEditable={isEditable}
      />
      <EditFullTextButton toogleIsEditable={toogleIsEditable} />
    </div>
  );

}

DescriptionEditBox.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
}
