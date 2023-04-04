import React from "react";
import { showNotification } from "Project/components/notifications/notifications";
import "./close-edit-button.css";

export function CloseEditButton(props) {

  return(
    <button className="small-button red-button close-edit-button"
      onClick={() => {
          if (!props.isChangeTask()) {
            props.exitEditWindow();
            return;
          }
          showNotification(
            "Внесённые изменения будут удалены. Вы точно хотите выйти?",
            "center-confirm",
            props.exitEditWindow
          );
        }
      }
    >
      ×
    </button>
  );
}
