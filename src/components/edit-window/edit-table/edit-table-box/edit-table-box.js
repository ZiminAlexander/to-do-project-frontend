import React, {useState} from "react";
import PropTypes from 'prop-types';
import { TitleBox } from "./title-box/title-box";
import { DescriptionBox } from "./description-box/description-box";
import { SaveEditButton } from "./save-edit-button/save-edit-button";
import { CloseEditButton } from "./close-edit-button/close-edit-button";
import { api } from "Project/api/api";
import "./edit-table-box.css";

export function EditTableBox({editedTask, setEditTaskID, updateTasksFromServer}) {

  const editTitle = editedTask.data.title;
  const editDescription = editedTask.data.description;
  const [newTitle, setNewTitle] = useState(editTitle);
  const [newDescription, setNewDescription] = useState(editDescription);

  const getNewDescription = () => {
    return newDescription;
  }

  const isChangeTask = () => {
    const oldTitle = editTitle;
    const oldDescription = editDescription;
    if ((newTitle !== oldTitle) || (newDescription !== oldDescription)){
      return true;
    } else {
      return false;
    }
  }

  const updateTask = () => {
    editedTask.data.title = newTitle;
    editedTask.data.description = newDescription;
    return api.tasks.update(editedTask);
  }

  const exitEditWindow = () => {
    setEditTaskID("");
  }

  return(
    <div className="edit-table-box">
      <TitleBox editTitle={editTitle}
        setTitle={setNewTitle}
      />
      <DescriptionBox editDescription={editDescription}
        setDescription={setNewDescription}
        getNewDescription={getNewDescription}
      />
      <SaveEditButton exitEditWindow={exitEditWindow}
        isChangeTask={isChangeTask}
        updateTask={updateTask}
        updateTasksFromServer={updateTasksFromServer}
      />
      <CloseEditButton exitEditWindow={exitEditWindow}
        isChangeTask={isChangeTask}
      />
    </div>
  );

}

EditTableBox.propTypes = {
  editedTask: PropTypes.object.isRequired, 
  setEditTaskID: PropTypes.func.isRequired, 
  updateTasksFromServer: PropTypes.func.isRequired,
}
