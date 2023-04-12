import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { dateFormat } from "Project/helpers/dateFormat";
import { IsCompletedCheckbox } from "./is-completed/is-completed";
import { Text } from "./text/text";
import { TaskDate } from "./task-date/task-date";
import { DeleteTaskButton } from "./delete-task-button/delete-task-button";
import { NotificationContext } from "Project/index.js";
import { api } from "Project/api/api";
import "./task.css";

export function Tasks({allTasks, getEditedTask, setEditTaskID, updateTasksFromServer}){

  const [deleteTaskID, setDeleteTaskID] = useState("");
  const [isLoadingDelete, setIsLoadingDelete] = useState(null);
  const {setIsShowNotification, setNotificationOptions} = React.useContext(NotificationContext);
  const createTasksArray = (currentTask, i) => {

    const isCompleted = currentTask.isCompleted;
    const createdDate = dateFormat(currentTask.createdAt);
    const currentTaskID = currentTask.id;

    return(
      <div className={"task form panel" + (isCompleted ? " complete-task" : "")}
        id={currentTaskID}
        key={i}
      >
        <IsCompletedCheckbox isCompleted={isCompleted}
          getEditedTask={getEditedTask}
          updateTasksFromServer={updateTasksFromServer}
          currentTaskID={currentTaskID}
        />
        <Text title={currentTask.title}
          currentTaskID={currentTaskID}
          setEditTaskID={setEditTaskID}
        />
        <TaskDate createdDate={createdDate}/>
        <DeleteTaskButton
          currentTaskID={currentTaskID}
          setDeleteTaskID={setDeleteTaskID}
          isLoadingDelete={isLoadingDelete}
        />
      </div>
    );
  }
  useEffect(() => {
    if (deleteTaskID !== ""){
      setNotificationOptions({
        textOfNotification: "Задача будет удалена без возможности восстановления. Вы точно хотите удалить задачу?", 
        position: "center-confirm",
        yesCallback: () => {
          setIsLoadingDelete(true);
          setDeleteTaskID("");
          api.tasks.remove(deleteTaskID).then(() => {
            setIsLoadingDelete(false);
            updateTasksFromServer();
          });
        },
        noCallback: () => {
          setDeleteTaskID("");
        },
      }) 
      setIsShowNotification(true);
    }
  }, [deleteTaskID])

  let TasksArray = [];
  if (allTasks === "ServerError") {
    TasksArray = 
      <div className="task form panel"> 
        Нет соединения с сервером, пожалуйста, обратитесь к администратору.
      </div>
  } else if (allTasks === "NoTasks") {
    TasksArray = 
      <div className="task form panel"> 
        На данный момент задач нет, добавьте новую задачу, или введите другие критерии поиска.
      </div>
  } else TasksArray = allTasks.map(createTasksArray)
  

  return(TasksArray);

}

Tasks.propTypes = {
  allTasks: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired, 
  getEditedTask: PropTypes.func.isRequired,
  setEditTaskID: PropTypes.func.isRequired,
  updateTasksFromServer: PropTypes.func.isRequired,
}