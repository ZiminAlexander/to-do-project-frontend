import React, { useState } from "react";
import PropTypes from 'prop-types';
import { NewTaskArea } from "./new-task-area/new-task-area";
import { SubmitNewTaskButton } from "./submit-new-task-button/submit-new-task-button";
import "./new-task-form.css";

export const NewTaskForm = ({submitTask}) => {

  const [newTask, setNewTask] = useState("");
  const [isLoadingNewTask, setIsLoadingNewTask] = useState(false);

  const submitTaskCallback = () => {
    //Добавляем индикатор загрузки на кнопку +
    setIsLoadingNewTask(true);
    //Удаляем задачу из state
    submitTask(newTask, setIsLoadingNewTask);
    //Очищаем поле новой задачи
    setNewTask("");
  }
  return (
    <div className="form new-task-form panel">
      <NewTaskArea newTask={newTask}
        setNewTask={setNewTask}
        submitTaskCallback={submitTaskCallback}
      />
      <SubmitNewTaskButton submitTaskCallback={submitTaskCallback}
        isLoadingNewTask={isLoadingNewTask}
      />
    </div>
  );

}

NewTaskForm.propTypes = {
  submitTask: PropTypes.func.isRequired,
}