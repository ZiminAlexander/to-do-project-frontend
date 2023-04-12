import React, { useState } from "react";
import PropTypes from 'prop-types';
import { NotificationContext } from "Project/index.js";
import "./search-area.css";

export function SearchArea({updateTasksFromServer, setSearchFilter, isClear}) {
  const [timeoutID, setTimeoutID] = useState(null);
  const {setIsShowNotification, setNotificationOptions} = React.useContext(NotificationContext);
  //Callback для поиска задачи
  const searchAreaInputCallback = function(event) {
    const searchElement = event.target;
    const startValue = searchElement.value;
    if (startValue.length > 200) {
      setNotificationOptions({textOfNotification: "Строка поиска не должна включать более 200 символов", 
        position: "right-bottom"}
      ) 
      setIsShowNotification(true);
      return;
    }
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    setTimeoutID( setTimeout(() => {
      if (startValue === searchElement.value) {
        setSearchFilter(startValue);
        updateTasksFromServer(startValue);
      }
    }, 600))
  }    

  return(
    <input className="search-area text-input" 
      type="text"
      placeholder="Поиск задачи"
      onChange={searchAreaInputCallback}
      value={isClear? "" : undefined}
    />

  );

}

SearchArea.propTypes = {
  updateTasksFromServer: PropTypes.func.isRequired, 
  setSearchFilter: PropTypes.func.isRequired, 
  isClear: PropTypes.bool.isRequired, 
}