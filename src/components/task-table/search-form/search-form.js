import {createNewElement} from "Project/helpers/createNewElement.js";
import { createSearchArea } from "./search-area/search-area.js";
import { createClearSearchButton } from "./clear-search-button/clear-search-button.js";
import { searchAreaInputCallback } from "../task/task.js";

export function createSearchForm(){

    const searchForm = createNewElement("div", ["form", "search-form", "panel"]);
    const searchArea = createSearchArea(searchAreaInputCallback);
    const clearSearchButton = createClearSearchButton();
    
    searchForm.append(searchArea);
    searchForm.append(clearSearchButton);
    
    return searchForm;
}
