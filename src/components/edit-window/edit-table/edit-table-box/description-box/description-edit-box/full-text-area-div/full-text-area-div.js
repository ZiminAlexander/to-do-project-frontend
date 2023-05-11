import React from "react";
import PropTypes from "prop-types";
import "./full-text-area-div.css";

export const FullTextAreaDiv = ({description, setDescription, isEditable}) => {

  return(
    <div className="full-text-area-div">
      <textarea className={`task-edit-full-text text-input ${!isEditable ? " no-display" : ""}`}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        defaultValue={description}
      >
      </textarea>
      <div className={`task-full-text text-input ${isEditable ? " no-display" : ""}`}
        dangerouslySetInnerHTML={{__html: description}}
      >
      </div>
    </div>
  );

}

FullTextAreaDiv.propTypes = {
  description: PropTypes.string.isRequired,  
  setDescription: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
}