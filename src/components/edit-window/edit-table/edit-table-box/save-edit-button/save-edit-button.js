import React from "react";
import PropTypes from 'prop-types';
import "./save-edit-button.css";

export const SaveEditButton = ({saveEditTask, isLoadingSave}) => {

  return(
    <button className={`save-edit-button big-button ${isLoadingSave ? " loading-spinner" : ""}`}
      onClick={saveEditTask}
    >
      Сохранить и выйти
    </button>
  );
}

SaveEditButton.propTypes = {
  saveEditTask: PropTypes.func.isRequired, 
  isLoadingSave: PropTypes.bool.isRequired,
}