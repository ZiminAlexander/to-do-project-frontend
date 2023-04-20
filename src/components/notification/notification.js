import React, { Fragment, useEffect } from "react";
import PropTypes from 'prop-types';
import "./notification.css";

export const Notification = ({notificationOptions, setNotificationOptions}) => {

  const textOfNotification = notificationOptions.textOfNotification;
  const position = notificationOptions.position;
  
  useEffect(() => {
    if (position === "right-bottom"){
    setTimeout(() => setNotificationOptions(null), 3000);
    }
  }, [position])
  
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
              setNotificationOptions(null);
              notificationOptions.noCallback();
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
              setNotificationOptions(null);
              notificationOptions.yesCallback();
            }}
          >
            Да
          </button>
          <button className="big-button answer-button"
            onClick={() => {
              setNotificationOptions(null);
              notificationOptions.noCallback();
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

Notification.propTypes = {
  notificationOptions: PropTypes.shape({
    textOfNotification: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    yesCallback: PropTypes.func,
    noCallback: PropTypes.func,
  }).isRequired, 
  setNotificationOptions: PropTypes.func.isRequired,
}
