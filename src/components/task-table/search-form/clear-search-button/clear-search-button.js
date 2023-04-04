import React from "react";
import "./clear-search-button.css";

export function ClearSearchButton(props) {

  return(
    <button className="clear-search-button small-button red-button"
      //Очистить поле поиска 
      onClick={(event) => {
          props.setSearchFilter("");
          props.updateTasksFromServer("");
          event.target.parentElement.firstChild.value="";
        }
      }
    >×</button>
  );

}
