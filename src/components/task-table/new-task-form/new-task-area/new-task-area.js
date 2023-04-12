import React from "react";
import PropTypes from 'prop-types';
import "./new-task-area.css";

export function NewTaskArea({setNewTask, submitTask, setNewTaskArea, isLoadingNewTask}) {

  //Callback для поля ввода на нажатие "Enter"
  const enterButtonForNewTaskAreaCallback = function(event) {
    // Если кнопка не 'Enter' выйти
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    submitTask(event);
  }

  return (
    <div className="input-text-div">
      <textarea className="textarea new-task-area text-input" 
        onKeyDown={enterButtonForNewTaskAreaCallback}
        placeholder="Новая задача"
        onChange={(event) => {setNewTask(event.target.value)}}
        onClick={(event) => {setNewTaskArea(event.target)}}
        value={isLoadingNewTask? "" : undefined}
      />
    </div>
  );

}

NewTaskArea.propTypes = {
  setNewTask: PropTypes.func.isRequired, 
  submitTask: PropTypes.func.isRequired, 
  setNewTaskArea: PropTypes.func.isRequired, 
  isLoadingNewTask: PropTypes.bool.isRequired,
}