import React from "react";
import "./loading-window.css";

export const LoadingWindow = () => {

    return(
      <div className="loading-window">
        <div className="loading-message">
          Задачи обновляются, подождите, пожалуйста.
        </div>
      </div>
    );
}
