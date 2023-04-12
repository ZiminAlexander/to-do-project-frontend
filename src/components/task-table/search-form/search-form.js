import React, { useState } from "react";
import PropTypes from 'prop-types';
import { SearchArea } from "./search-area/search-area";
import { ClearSearchButton } from "./clear-search-button/clear-search-button";

export function SearchForm({updateTasksFromServer, setSearchFilter}) {
    const [isClear, setIsClear] = useState(false);
  return (
    <div className="form search-form panel">
      <SearchArea updateTasksFromServer={updateTasksFromServer}
        setSearchFilter={setSearchFilter} 
        isClear={isClear}
      />
      <ClearSearchButton updateTasksFromServer={updateTasksFromServer}
        setSearchFilter={setSearchFilter}
        setIsClear={setIsClear}
      />
    </div>
  );

}

SearchForm.propTypes = {
  updateTasksFromServer: PropTypes.func.isRequired, 
  setSearchFilter: PropTypes.func.isRequired,
}
