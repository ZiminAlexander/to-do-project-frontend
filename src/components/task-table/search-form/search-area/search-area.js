import { createNewElement } from "Project/helpers/createNewElement";
import "./search-area.css";

export function createSearchArea (searchCallback){
    const searchArea = createNewElement("input", ["search-area", "text-input"]);
    searchArea.type = "text";
    searchArea.placeholder = "Поиск задачи";
    searchArea.addEventListener("input", searchCallback);

    return searchArea;
}


  


  
  