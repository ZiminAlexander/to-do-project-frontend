import React from "react";
import PropTypes from 'prop-types';
import "./new-task-area.css";

export const NewTaskArea = ({newTask, setNewTask, submitTaskCallback}) => {
  //Callback для поля ввода на нажатие "Enter"
  const enterButtonForNewTaskAreaCallback = (event) => {
    // Если кнопка не 'Enter' выйти
    if (event.code !== "Enter") {
      return;
    }
    debugger
    event.preventDefault();
    submitTaskCallback();
  }

  return (
    <div className="input-text-div">
      <textarea className="textarea new-task-area text-input" 
        onKeyDown={enterButtonForNewTaskAreaCallback}
        placeholder="Новая задача"
        onChange={(event) => {setNewTask(event.target.value)}}
        value={newTask}
      />
    </div>
  );

}

NewTaskArea.propTypes = {
  newTask: PropTypes.string.isRequired, 
  setNewTask: PropTypes.func.isRequired, 
  submitTaskCallback: PropTypes.func.isRequired, 
}