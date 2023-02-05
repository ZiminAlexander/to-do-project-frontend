import { createNewElement } from "Project/helpers/createNewElement";
import { updateTasksFromServer } from "../../task/task";
import "./clear-search-button.css";

export function createClearSearchButton() {
    const clearSearchButton = createNewElement("button", 
        ["clear-search-button", "small-button", "red-button"]);
    clearSearchButton.textContent = "×";
    clearSearchButton.addEventListener("click", clearSearchCallback);
    
    return clearSearchButton;
}

//Добавить Callback для кнопки clear-search
function clearSearchCallback(){
    this.parentElement.querySelector(".search-area").value = "";
    updateTasksFromServer();
}