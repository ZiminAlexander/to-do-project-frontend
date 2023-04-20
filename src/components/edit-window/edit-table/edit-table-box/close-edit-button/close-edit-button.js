import React from "react";
import PropTypes from 'prop-types';
import "./close-edit-button.css";

export const CloseEditButton = ({closeEditButtonCallback}) => {

  return(
    <button className="small-button red-button close-edit-button"
      onClick={closeEditButtonCallback}
    >
      ×
    </button>
  );
}

CloseEditButton.propTypes = {
  closeEditButtonCallback: PropTypes.func.isRequired,
};