import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FullTextAreaDiv } from "./full-text-area-div/full-text-area-div";
import { EditFullTextButton } from "./edit-full-text-button/edit-full-text-button";
import "./description-edit-box.css";

export const DescriptionEditBox = ({newDescription, setNewDescription}) => {

  const [isEditEnable, setIsEditEnable] = useState(false);
  const changeIsEditEnable = () => {
    setIsEditEnable(!isEditEnable);
  }

  return(
    <div className="description-edit-box">
      <FullTextAreaDiv newDescription={newDescription}
         setNewDescription={setNewDescription}
         isEditEnable={isEditEnable}
      />
      <EditFullTextButton changeIsEditEnable={changeIsEditEnable} />
    </div>
  );

}

DescriptionEditBox.propTypes = {
  setNewDescription: PropTypes.func.isRequired,
  newDescription: PropTypes.string.isRequired,
}
