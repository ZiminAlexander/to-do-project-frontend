import React, { useState } from "react";
import PropTypes from 'prop-types';
import { NewTaskArea } from "./new-task-area/new-task-area";
import { SubmitNewTaskButton } from "./submit-new-task-button/submit-new-task-button";
import { NotificationContext } from "Project/index.js";
import { api } from "Project/api/api";
import "./new-task-form.css";

export const NewTaskForm = ({updateTasksFromServer}) => {

  const [newTask, setNewTask] = useState("");
  const [newTaskArea, setNewTaskArea] = useState(null);
  const [isLoadingNewTask, setIsLoadingNewTask] = useState(false);
  const setNotificationOptions = React.useContext(NotificationContext);
  
  //Отправить задачу на сервер 
  const submitTask = () => {
    if ((newTask.trim() === "") || (!newTaskArea)) {
      setNotificationOptions({textOfNotification: "Нельзя добавить пустую задачу", 
        position: "right-bottom"}
      ) 
      return;
    }
    //Добавляем индикатор загрузки на кнопку +
    setIsLoadingNewTask(true);
    //Формируем объект для отправки на сервер
    const taskData = {data: {
        title: newTask,
        isCompleted: false,
        description: "",
      }
    }
    //Отправляем задачу на сервер
    api.tasks.submit(taskData).then(() => {
      setIsLoadingNewTask(false);
      setNewTask("");
      updateTasksFromServer();
    });
    //Удаляем задачу из state
    setNewTask("");
  }

  return (
    <div className="form new-task-form panel">
      <NewTaskArea setNewTask={setNewTask}
        submitTask={submitTask}
        setNewTaskArea={setNewTaskArea}
        isLoadingNewTask={isLoadingNewTask}
    />
      <SubmitNewTaskButton submitTask={submitTask}
        isLoadingNewTask={isLoadingNewTask}
      />
    </div>
  );

}

NewTaskForm.propTypes = {
  updateTasksFromServer: PropTypes.func.isRequired,
}