import { createNewElement } from "Project/helpers/createNewElement";
import { dateFormat } from "Project/helpers/dateFormat";
import { createIsCompleted } from "./is-completed/is-completed";
import { createText } from "./text/text";
import { createTaskDate } from "./task-date/task-date";
import { createDeleteTaskButton } from "./delete-task-button/delete-task-button";
import { talkWithServer } from "Project/api/talkWithServer";
import { createFetchObject } from "Project/helpers/createFetchObject";
import "./task.css";


//Обновить задачи
export function updateTasksFromServer(){
    let fetchAnswer = {};
    const searchFilter = document.querySelector(".search-area").value;
    if (searchFilter === "") {
      fetchAnswer = talkWithServer("LOAD");
    } else {
      fetchAnswer = talkWithServer("SEARCH");
    }
    //Загрузим задачи с сервера
    fetchAnswer
    .then((response) => response.json())
    .then((allTasks) => {
      //Удалим все отображённые задачи;
      for (const taskElement of document.querySelectorAll(".task")) {
        taskElement.remove();
      }
      //Сообщение при отсутствии задач;
      if (allTasks.length === 0){
        const newTaskElement = createNewElement("div", ["form", "task"]);
        const taskTableElement = document.querySelector(".task-table");
        newTaskElement.textContent = "На данный момент задач нет, добавьте новую задачу, или введите другие критерии поиска";
        newTaskElement.classList.add("no-tasks");
        taskTableElement.append(newTaskElement);
        return;
      }
      //Вывод задач
      for (let i = 0; i < allTasks.length; i++){
        addTaskElement(allTasks[i]);
      }
    });
  }

export function updateTask(currentTask){
  const currentFetchObject = createFetchObject (currentTask);
  talkWithServer("PUT", currentFetchObject);
}

  //Добавляет задачу 
function addTaskElement (taskElementFromServer){
    const taskTableElement = document.querySelector(".task-table");
    const newTaskElement = createNewElement("div", ["task", "form"]);
    const newCheckBoxElement = createIsCompleted();
    const newTextElement = createText();
    const newDeleteElement = createDeleteTaskButton();
    const newTaskDate = createTaskDate();
   //Сохраняем данные из сервера в задачу
    newTextElement.innerHTML = taskElementFromServer.title;
    newTaskElement.id =  taskElementFromServer.id;
    newTaskElement.dataset.createdTime = taskElementFromServer.createdAt;
    newTaskElement.dataset.description = taskElementFromServer.description;
    //Корректируем чекбокс для задачи
    newCheckBoxElement.type = "checkbox";
    if (taskElementFromServer.isCompleted){
      newCheckBoxElement.checked = true;
      newTaskElement.classList.add("complete-task");
    }
    //Устанавливаем дату с сервера
    newTaskDate.innerHTML = dateFormat(taskElementFromServer.createdAt);
    //Собираем task элемент и добавляем Callback
    newTaskElement.append(newCheckBoxElement);
    newTaskElement.append(newTextElement);
    newTaskElement.append(newTaskDate);
    newTaskElement.append(newDeleteElement);
    //Добавляем задачу на экран
    taskTableElement.append(newTaskElement);
}



