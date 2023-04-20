import React from "react";
import PropTypes from 'prop-types';
import "./text-area-div.css";

export const TextAreaDiv = ({newTitle, setNewTitle, isEditEnable}) => {

  return(
    <div className="text-area-div">
      <textarea className="task-edit-text disabled text-input" 
        disabled={!isEditEnable}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
        defaultValue={newTitle}
      >
      </textarea> 
    </div>
  );
  
}

TextAreaDiv.propTypes = {
  newTitle: PropTypes.string.isRequired,
  setNewTitle: PropTypes.func.isRequired,
  isEditEnable: PropTypes.bool.isRequired,
}
