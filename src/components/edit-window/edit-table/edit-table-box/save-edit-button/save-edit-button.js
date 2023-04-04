import React from "react";
import { addSpinner } from "Project/helpers/addSpinner";
import "./save-edit-button.css";

export function SaveEditButton(props) {

  return(
    <button className="save-edit-button big-button"
      onClick={(event) => {
        const saveEditButton = event.target;
        if (!props.isChangeTask()) {
            props.exitEditWindow();
            return;
        }
        addSpinner("on", saveEditButton);
        props.updateTask().then(() => {
          addSpinner("off", saveEditButton);
          props.exitEditWindow();
          props.updateTasksFromServer();
          })
        }
      }
    >
      Сохранить и выйти
    </button>
  );
}
