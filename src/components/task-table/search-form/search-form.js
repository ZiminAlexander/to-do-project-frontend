import React from "react";
import { SearchArea } from "./search-area/search-area";
import { ClearSearchButton } from "./clear-search-button/clear-search-button";

export function SearchForm(props) {
  
  return (
    <div className="form search-form panel">
      <SearchArea updateTasksFromServer={props.updateTasksFromServer}
          setSearchFilter={props.setSearchFilter} />
      <ClearSearchButton updateTasksFromServer={props.updateTasksFromServer}
          setSearchFilter={props.setSearchFilter}/>
    </div>
  );

}
