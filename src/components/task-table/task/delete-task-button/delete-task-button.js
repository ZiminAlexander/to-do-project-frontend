import React from "react";
import PropTypes from 'prop-types';
import "./delete-task-button.css";

export const DeleteTaskButton = ({currentTaskID, setDeleteTaskID, isLoadingDelete}) => {

  return (
    <button className={"small-button remove-button delete-task-button" + (isLoadingDelete? " loading-spinner" : "")}
      onClick={() => {
        setDeleteTaskID(currentTaskID);
        }
      }
    />
  );

}

DeleteTaskButton.propTypes = {
  currentTaskID: PropTypes.string.isRequired, 
  setDeleteTaskID: PropTypes.func.isRequired, 
  isLoadingDelete: PropTypes.bool,
}
