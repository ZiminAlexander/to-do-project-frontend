import { createNewElement } from "Helpers/createNewElement";
import { updateTasksFromServer } from "../../3-task/task";
import "./clear-search-button.css";

export function createClearSearchButton() {
    const clearSearchButton = createNewElement("button", 
        ["clear-search-button", "x-button", "circle-button"]);
    clearSearchButton.addEventListener("click", clearSearchCallback);
    
    return clearSearchButton;
}

//Добавить Callback для кнопки clear-search
function clearSearchCallback(){
    this.parentElement.querySelector(".search-area").value = "";
    updateTasksFromServer();
}