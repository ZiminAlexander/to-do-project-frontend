import React from "react";
import PropTypes from 'prop-types';
import "./close-edit-button.css";

export const CloseEditButton = ({onClose}) => {

  return(
    <button className="small-button red-button close-edit-button"
      onClick={onClose}
    >
      ×
    </button>
  );
}

CloseEditButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};