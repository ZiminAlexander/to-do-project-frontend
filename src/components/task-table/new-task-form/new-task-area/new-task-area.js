import React, { useState } from "react";
import "./new-task-area.css";

export function NewTaskArea(props) {

  //Callback для поля ввода на нажатие "Enter"
  const enterButtonForNewTaskAreaCallback = function(event) {
    // Если кнопка не 'Enter' выйти
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    props.submitTask(event);
  }

  //Callback для автоизменения размера для submit-text textarea
  const autoSizeNewTaskAreaCallback = function(event) {
    const textareaElement = event.target;
    if (textareaElement.clientHeight < textareaElement.scrollHeight) {
      textareaElement.style.height = textareaElement.scrollHeight + "px";
    } else if (textareaElement.clientHeight > textareaElement.scrollHeight) {
      textareaElement.style.height = textareaElement.scrollHeight + "px";
    }
  }

  return (
    <div className="input-text-div">
      <textarea className="textarea new-task-area text-input" 
        onKeyDown={enterButtonForNewTaskAreaCallback}
        onInput={autoSizeNewTaskAreaCallback}
        placeholder="Новая задача"
        onChange={(event) => {props.setNewTask(event.target.value)}}
        onClick={(event) => {props.setNewTaskArea(event.target)}}
      />
    </div>
  );

}
