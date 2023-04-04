import React, {useState} from "react";
import { TitleBox } from "./title-box/title-box";
import { DescriptionBox } from "./description-box/description-box";
import { SaveEditButton } from "./save-edit-button/save-edit-button";
import { CloseEditButton } from "./close-edit-button/close-edit-button";
import { api } from "Project/api/api";
import "./edit-table-box.css";

export function EditTableBox(props) {

  const [newTitle, setNewTitle] = useState(props.editedTask.title.toString());
  const [newDescription, setNewDescription] = useState(props.editedTask.description.toString());

  const isChangeTask = () => {
    const oldTitle = props.editedTask.title;
    const oldDescription = props.editedTask.description;
    if ((newTitle !== oldTitle) || (newDescription !== oldDescription)){
      return true;
    } else {
      return false;
    }
  }

  const updateTask = () => {
    const editedTask = props.editedTask;
    const updatedTask = {
      id: editedTask.id, 
      data: {
        title: newTitle,
        isCompleted: editedTask.isCompleted, 
        description: newDescription}
    }
    return api.tasks.update(updatedTask);
  }

  const exitEditWindow = () => {
    props.setEditTaskID("");
  }

  return(
    <div className="edit-table-box">
      <TitleBox editedTask={props.editedTask}
        setTitle={setNewTitle}
      />
      <DescriptionBox editedTask={props.editedTask}
        setDescription={setNewDescription}
      />
      <SaveEditButton exitEditWindow={exitEditWindow}
        isChangeTask={isChangeTask}
        updateTask={updateTask}
        updateTasksFromServer={props.updateTasksFromServer}
      />
      <CloseEditButton exitEditWindow={exitEditWindow}
        isChangeTask={isChangeTask}
      />
    </div>
  );

}
