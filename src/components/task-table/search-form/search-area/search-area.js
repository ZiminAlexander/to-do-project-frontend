import React, { useState } from "react";
import "./search-area.css";

export function SearchArea(props) {
  const [timeoutID, setTimeoutID] = useState(null);
  //Callback для поиска задачи
  const searchAreaInputCallback = function(event) {
    const searchElement = event.target;
    const startValue = searchElement.value;
    if (startValue.length > 200) {
      showNotification("Строка поиска не должна включать более 200 символов", "right-bottom");
      return;
    }
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    setTimeoutID( setTimeout(() => {
      if (startValue === searchElement.value) {
        props.setSearchFilter(startValue);
        props.updateTasksFromServer(startValue);
      }
    }, 600))
  }    

  return(
    <input className="search-area text-input" 
      type="text"
      placeholder="Поиск задачи"
      onChange={searchAreaInputCallback}
    />

  );

}
