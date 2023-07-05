import React from "react";
import PropTypes from 'prop-types';
import "./text.css";

export const Text = ({title, openEditWindow}) => {

  return (
    <div className="text"
      onClick={() => {
        openEditWindow();
      }}
    >
      {title}
    </div>
  );

}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  openEditWindow: PropTypes.func.isRequired,
}