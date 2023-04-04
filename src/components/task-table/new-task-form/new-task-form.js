import React, { useState } from "react";
import { NewTaskArea } from "./new-task-area/new-task-area";
import { SubmitNewTaskButton } from "./submit-new-task-button/submit-new-task-button";
import { showNotification } from "../../notifications/notifications";
import { addSpinner } from "Project/helpers/addSpinner";
import { api } from "Project/api/api";
import "./new-task-form.css";

export function NewTaskForm(props) {

  const [newTask, setNewTask] = useState("");
  const [newTaskArea, setNewTaskArea] = useState(null);

  //Отправить задачу на сервер 
  const submitTask = function() {
    if ((newTask.trim() === "") || (!newTaskArea)) {
      showNotification("Нельзя добавить пустую задачу", "right-bottom");
      return;
    }
    const submitNewTaskButton = newTaskArea.parentElement.parentElement.lastChild;
    //Формируем объект для отправки на сервер
    const taskData = {};
    taskData.data = {};
    taskData.data.title = newTask;
    taskData.data.isCompleted = false;
    taskData.data.description = "";
    //Восстанавливаем размеры вводимого окна
    newTaskArea.value = "";
    newTaskArea.style.height = "35px";
    //Добавляем индикатор загрузки на кнопку +
    addSpinner("on", submitNewTaskButton);
    //Отправляем задачу на сервер
    api.tasks.submit(taskData).then(() => {
      addSpinner("off", submitNewTaskButton);
      setNewTask("");
      props.updateTasksFromServer();
    });
  }

  return (
    <div className="form new-task-form panel">
      <NewTaskArea setNewTask={setNewTask}
        submitTask={submitTask}
        setNewTaskArea={setNewTaskArea}
    />
      <SubmitNewTaskButton submitTask={submitTask} />
    </div>
  );

}
