import React from "react";
import PropTypes from "prop-types";
import "./full-text-area-div.css";

export function FullTextAreaDiv({setDescription, editDescription, isEditEnable, getNewDescription}) {

  return(
    <div className="full-text-area-div">
      <textarea className={"task-edit-full-text text-input" + (!isEditEnable ? " no-display" : "")}
        onChange={(event) => {
          const newDescription = event.target.value;
          setDescription(newDescription);
        }}
        defaultValue={editDescription}
      >
      </textarea>
      <div className={"task-full-text text-input" + (isEditEnable ? " no-display" : "")}
        dangerouslySetInnerHTML={{__html: getNewDescription()}}
      >
      </div>
    </div>
  );

}

FullTextAreaDiv.propTypes = {
  setDescription: PropTypes.func.isRequired,
  editDescription: PropTypes.string.isRequired,
  isEditEnable: PropTypes.bool.isRequired,
  getNewDescription: PropTypes.func.isRequired,
}