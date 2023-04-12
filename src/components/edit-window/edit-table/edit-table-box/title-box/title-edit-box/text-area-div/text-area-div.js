import React from "react";
import PropTypes from 'prop-types';
import "./text-area-div.css";

export function TextAreaDiv({editTitle, setTitle, isEditEnable}) {

  return(
    <div className="text-area-div">
      <textarea className="task-edit-text disabled text-input" 
        disabled={!isEditEnable}
        onChange={(event) => {
          const newTitle = event.target.value;
          setTitle(newTitle);
        }}
        defaultValue={editTitle}
      >
      </textarea> 
    </div>
  );
  
}

TextAreaDiv.propTypes = {
  editTitle: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  isEditEnable: PropTypes.bool.isRequired,
}
