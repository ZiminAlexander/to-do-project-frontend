import React from "react";
import PropTypes from "prop-types";
import "./full-text-area-div.css";

export const FullTextAreaDiv = ({newDescription, setNewDescription, isEditEnable}) => {

  return(
    <div className="full-text-area-div">
      <textarea className={"task-edit-full-text text-input" + (!isEditEnable ? " no-display" : "")}
        onChange={(event) => {
          setNewDescription(event.target.value);
        }}
        defaultValue={newDescription}
      >
      </textarea>
      <div className={"task-full-text text-input" + (isEditEnable ? " no-display" : "")}
        dangerouslySetInnerHTML={{__html: newDescription}}
      >
      </div>
    </div>
  );

}

FullTextAreaDiv.propTypes = {
  setNewDescription: PropTypes.func.isRequired,
  newDescription: PropTypes.string.isRequired,
  isEditEnable: PropTypes.bool.isRequired,
}