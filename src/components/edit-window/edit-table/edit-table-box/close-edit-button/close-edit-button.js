import React from "react";
import { NotificationContext } from "Project/index.js";
import PropTypes from 'prop-types';
import "./close-edit-button.css";

export function CloseEditButton({exitEditWindow, isChangeTask}) {
  const {setIsShowNotification, setNotificationOptions} = React.useContext(NotificationContext);
  return(
    <button className="small-button red-button close-edit-button"
      onClick={() => {
          if (!isChangeTask()) {
            exitEditWindow();
            return;
          }
          setNotificationOptions({
            textOfNotification: "Внесённые изменения будут удалены. Вы точно хотите выйти?", 
            position: "center-confirm",
            yesCallback: exitEditWindow,
            noCallback: () => {return;},
          }) 
          setIsShowNotification(true);
        }
      }
    >
      ×
    </button>
  );
}

CloseEditButton.propTypes = {
  exitEditWindow: PropTypes.func.isRequired,
  isChangeTask: PropTypes.func.isRequired
};