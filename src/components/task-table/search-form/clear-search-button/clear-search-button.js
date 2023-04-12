import React from "react";
import PropTypes from 'prop-types';
import "./clear-search-button.css";

export function ClearSearchButton({setSearchFilter, updateTasksFromServer, setIsClear}) {

  return(
    <button className="clear-search-button small-button red-button"
      //Очистить поле поиска 
      onClick={() => {
          setSearchFilter("");
          updateTasksFromServer("");
          setIsClear(true);
          setTimeout(() => {setIsClear(false);}, 0);
        }
      }
    >×</button>
  );

}

ClearSearchButton.propTypes = {
  setSearchFilter: PropTypes.func.isRequired, 
  updateTasksFromServer: PropTypes.func.isRequired,  
  setIsClear: PropTypes.func.isRequired,  
}