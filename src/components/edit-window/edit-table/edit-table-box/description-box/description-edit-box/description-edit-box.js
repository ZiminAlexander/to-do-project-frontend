import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FullTextAreaDiv } from "./full-text-area-div/full-text-area-div";
import { EditFullTextButton } from "./edit-full-text-button/edit-full-text-button";
import "./description-edit-box.css";

export function DescriptionEditBox({setDescription, editDescription, getNewDescription}) {

  const [isEditEnable, setIsEditEnable] = useState(false);

  return(
    <div className="description-edit-box">
      <FullTextAreaDiv editDescription={editDescription}
         setDescription={setDescription}
         isEditEnable={isEditEnable}
         getNewDescription={getNewDescription}
      />
      <EditFullTextButton setIsEditEnable={setIsEditEnable}
        isEditEnable={isEditEnable}
        getNewDescription={getNewDescription}
      />
    </div>
  );

}

DescriptionEditBox.propTypes = {
  setDescription: PropTypes.func.isRequired,
  editDescription: PropTypes.string.isRequired,
  getNewDescription: PropTypes.func.isRequired,
}
