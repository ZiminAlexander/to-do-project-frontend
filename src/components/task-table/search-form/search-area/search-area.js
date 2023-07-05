import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import "./search-area.css";

export const SearchArea = ({searchAreaInputChange, setSearchAreaElement}) => {

  const searchAreaElement = useRef(null);
  
  useEffect(
    () => {setSearchAreaElement(searchAreaElement)}, 
    [searchAreaElement]
  )
  
  return(
    <input className="search-area text-input" 
      type="text"
      placeholder="Поиск задачи"
      onChange={searchAreaInputChange}
      ref={searchAreaElement}
    />

  );

}

SearchArea.propTypes = {
  searchAreaInputChange: PropTypes.func.isRequired,  
  setSearchAreaElement: PropTypes.func.isRequired, 
}