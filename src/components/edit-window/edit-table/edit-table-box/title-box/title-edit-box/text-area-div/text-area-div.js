import React from "react";
import PropTypes from 'prop-types';
import "./text-area-div.css";

export const TextAreaDiv = ({title, setTitle, isEditable}) => {

  return(
    <div className="text-area-div">
      <textarea className="task-edit-text disabled text-input" 
        disabled={!isEditable}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        defaultValue={title}
      >
      </textarea> 
    </div>
  );
  
}

TextAreaDiv.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
}
