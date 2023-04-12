import React, { Fragment, useEffect } from "react";
import "./notification.css";

export function Notification({setIsShowNotification, notificationOptions}) {

  const textOfNotification = notificationOptions.textOfNotification;
  const position = notificationOptions.position;
  
  useEffect(() => {if (position === "right-bottom"){
    setTimeout(() => setIsShowNotification(false), 3000);
    }
  }, [])
  
  const NotificationContent =     
    <div className={"notification panel" + 
      (((position === "center-confirm") ? " answer-position" : "")) + 
      (((position === "center") ? " center" : ""))
      }
    >
      <div className="text-of-notification">
        {textOfNotification}
      </div>
      { (position !== "center") ?
          <button className="small-button red-button close-notification-button"
            onClick={() => {
              setIsShowNotification(false);
              notificationOptions.noCallback();
              return;
              }
            }
          > 
            × 
          </button>
        :
        null
      }
      {(position === "center-confirm") ?
        <div className="answer-box">
          <button className="big-button answer-button"
            onClick={() => {
              setIsShowNotification(false);
              notificationOptions.yesCallback();
              return;
            }}
          >
            Да
          </button>
          <button className="big-button answer-button"
            onClick={() => {
              setIsShowNotification(false);
              notificationOptions.noCallback();
              return;
            }}
          >
            Нет
          </button> 
        </div> 
        : 
        null
      }
    </div>
  
  return(
    <Fragment>
      {(position === "right-bottom") ? 
          <>
            {NotificationContent}
          </>
        :
          null
      }
      {(position === "center-confirm") ?
          <div className="notification-window">
            {NotificationContent}
          </div>
        :
        null
      }
      {(position === "center") ?
          <div className="notification-window no-opacity-window">
            {NotificationContent}
          </div>
        :
        null
      }
    </Fragment>
  );

}
  