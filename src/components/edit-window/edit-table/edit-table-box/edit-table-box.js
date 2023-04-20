import React, {useState} from "react";
import PropTypes from 'prop-types';
import { TitleBox } from "./title-box/title-box";
import { DescriptionBox } from "./description-box/description-box";
import { SaveEditButton } from "./save-edit-button/save-edit-button";
import { CloseEditButton } from "./close-edit-button/close-edit-button";
import { api } from "Project/api/api";
import { NotificationContext } from "Project/index.js";
import "./edit-table-box.css";

export const EditTableBox = ({editedTask, setEditTaskID, updateTasksFromServer}) => {

  const editTitle = editedTask.data.title;
  const editDescription = editedTask.data.description;
  const [newTitle, setNewTitle] = useState(editTitle);
  const [newDescription, setNewDescription] = useState(editDescription);
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const setNotificationOptions = React.useContext(NotificationContext);

  const isChangeTask = () => {
    if ((newTitle !== editTitle) || (newDescription !== editDescription)){
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

  const saveEditButtonCallBack = () => {
    if (!isChangeTask()) {
      setEditTaskID("");
      return;
    }
    setIsLoadingSave(true);
    updateTask().then(() => {
      setIsLoadingSave(false);
      setEditTaskID("");
      updateTasksFromServer();
    })
  }

  const closeEditButtonCallback = () => {
    if (!isChangeTask()) {
      setEditTaskID("");
      return;
    }
    setNotificationOptions({
      textOfNotification: "Внесённые изменения будут удалены. Вы точно хотите выйти?", 
      position: "center-confirm",
      yesCallback: () => {setEditTaskID("")},
      noCallback: () => {return;},
    }) 
  }

  return(
    <div className="edit-table-box">
      <TitleBox newTitle={newTitle}
        setNewTitle={setNewTitle}
      />
      <DescriptionBox newDescription={newDescription}
        setNewDescription={setNewDescription}
      />
      <SaveEditButton saveEditButtonCallBack={saveEditButtonCallBack}
        isLoadingSave={isLoadingSave}
      />
      <CloseEditButton closeEditButtonCallback={closeEditButtonCallback} />
    </div>
  );

}

EditTableBox.propTypes = {
  editedTask: PropTypes.object.isRequired, 
  setEditTaskID: PropTypes.func.isRequired, 
  updateTasksFromServer: PropTypes.func.isRequired,
}
