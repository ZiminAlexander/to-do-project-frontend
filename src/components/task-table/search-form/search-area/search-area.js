import { createNewElement } from "Project/helpers/createNewElement";
import "./search-area.css";

export function createSearchArea (searchCallback){
    const searchArea = createNewElement("input", "search-area");
    searchArea.type = "text";
    searchArea.placeholder = "Поиск задачи";
    searchArea.addEventListener("input", searchCallback);

    return searchArea;
}


  


  
  