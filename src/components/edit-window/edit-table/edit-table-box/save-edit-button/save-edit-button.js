import React from "react";
import PropTypes from 'prop-types';
import "./save-edit-button.css";

export const SaveEditButton = ({saveEditButtonCallBack, isLoadingSave}) => {

  return(
    <button className={`save-edit-button big-button ${isLoadingSave ? " loading-spinner" : ""}`}
      onClick={saveEditButtonCallBack}
    >
      Сохранить и выйти
    </button>
  );
}

SaveEditButton.propTypes = {
  saveEditButtonCallBack: PropTypes.func.isRequired, 
  isLoadingSave: PropTypes.bool.isRequired,
}