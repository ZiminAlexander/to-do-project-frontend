import React from "react";
import PropTypes from 'prop-types';
import { SearchArea } from "./search-area/search-area";
import { ClearSearchButton } from "./clear-search-button/clear-search-button";


export const SearchForm = ({setSearchAreaElement, clearSearchArea, searchAreaInputChange}) => {

  return (
    <div className="form search-form panel">
      <SearchArea searchAreaInputChange={searchAreaInputChange}
        setSearchAreaElement={setSearchAreaElement}
      />
      <ClearSearchButton clearSearchArea={clearSearchArea} />
    </div>
  );

}

SearchForm.propTypes = {
  setSearchAreaElement: PropTypes.func.isRequired, 
  clearSearchArea: PropTypes.func.isRequired,
  searchAreaInputChange: PropTypes.func.isRequired,
}
