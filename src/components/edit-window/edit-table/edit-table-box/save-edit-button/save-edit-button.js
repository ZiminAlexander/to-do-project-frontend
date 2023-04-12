import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./save-edit-button.css";

export function SaveEditButton({exitEditWindow, isChangeTask, updateTasksFromServer, updateTask}) {
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  return(
    <button className={"save-edit-button big-button" + (isLoadingSave ? " loading-spinner" : "")}
      onClick={() => {
          if (!isChangeTask()) {
              exitEditWindow();
              return;
          }
          setIsLoadingSave(true);
          updateTask().then(() => {
              setIsLoadingSave(false);
              exitEditWindow();
              updateTasksFromServer();
            })
        }
      }
    >
      Сохранить и выйти
    </button>
  );
}

SaveEditButton.propTypes = {
  exitEditWindow: PropTypes.func.isRequired, 
  isChangeTask: PropTypes.func.isRequired, 
  updateTasksFromServer: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
}