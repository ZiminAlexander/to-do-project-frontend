import { createNewElement } from "Project/helpers/createNewElement";
import { updateTasksFromServer } from "../../task/task";
import "./search-area.css";

export function createSearchArea (){
    const searchArea = createNewElement("input", "search-area");
    searchArea.type = "text";
    searchArea.placeholder = "Поиск задачи";
    searchArea.addEventListener("input", searchAreaInputCallback);

    return searchArea;
}

//Добавить Callback для поля поиска search-area
function searchAreaInputCallback(){
    const startValue = this.value;
    if (this.dataset.timeoutID) {
      clearTimeout(this.dataset.timeoutID);
    }
    this.dataset.timeoutID = setTimeout(() => {
      if (startValue === this.value){
        updateTasksFromServer();
      } 
    }, 600);
  }
  


  
  