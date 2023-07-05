import React from "react";
import PropTypes from 'prop-types';
import "./clear-search-button.css";

export const ClearSearchButton = ({clearSearchArea}) => {

  return(
    <button className="clear-search-button small-button red-button"
      //Очистить поле поиска 
      onClick={() => {clearSearchArea();}}
    >
      ×
    </button>
  );

}

ClearSearchButton.propTypes = {
  clearSearchArea: PropTypes.func.isRequired, 
}