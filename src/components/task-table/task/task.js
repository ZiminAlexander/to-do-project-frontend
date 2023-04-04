import React from "react";
import { dateFormat } from "Project/helpers/dateFormat";
import { IsCompletedCheckbox } from "./is-completed/is-completed";
import { Text } from "./text/text";
import { TaskDate } from "./task-date/task-date";
import { DeleteTaskButton } from "./delete-task-button/delete-task-button";
import "./task.css";

export function Tasks(props){
  let TasksArray = [];
  if (props.allTasks === "ServerError") {
    TasksArray = 
      <div className="task form panel"> 
        Нет соединения с сервером, пожалуйста, обратитесь к администратору.
      </div>
  } else if (props.allTasks === "NoTasks") {
    TasksArray = 
      <div className="task form panel"> 
        На данный момент задач нет, добавьте новую задачу, или введите другие критерии поиска.
      </div>
  } else TasksArray = props.allTasks.map((currentTask, i) => {
      const isCompleted = currentTask.isCompleted;
      const createdDate = dateFormat(currentTask.createdAt);
      return(
      <div className={"task form panel" + (isCompleted ? " complete-task" : "")}
        id={currentTask.id}
        key={i}
      >
        <IsCompletedCheckbox isCompleted={isCompleted}
          getEditedTask={props.getEditedTask}
        />
        <Text title={currentTask.title}
          setEditTaskID={props.setEditTaskID}
        />
        <TaskDate createdDate={createdDate}/>
        <DeleteTaskButton 
          updateTasksFromServer={props.updateTasksFromServer}
        />
      </div>
      );
    })

  return(TasksArray);

}
