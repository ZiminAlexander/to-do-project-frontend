function main(){
  //Загрузим задачи с сервера
  updateTasksFromServer();
  //Добавить Callback для кнопки "+" Submit button
  const submitButton = document.querySelector(".submit-new-task");
  submitButton.addEventListener("click", submitTask);
  //Добавить Callback для кнопки Submit Button кнопкой Enter
  const newTaskAreaElement = document.querySelector('.new-task-area');
  newTaskAreaElement.addEventListener("keydown", enterButtonForNewTaskAreaCallback);
  //Добавить Callback для автоматического изменения поля Submit New Task Text Area
  newTaskAreaElement.addEventListener("input", autoSizeNewTaskAreaCallback);
  //Добавить Callback для кнопки Close EditWindow Button
  const closeEditButton = document.querySelector(".close-edit-button");
  closeEditButton.addEventListener("click", closeEditWindowCallback);
  //Добавить Callback для кнопки Save Edit Button
  const saveEditButton = document.querySelector(".save-edit-button");
  saveEditButton.addEventListener("click", saveEditButtonCallback);
  //Добавить Callback для кнопок edit-text-button и edit-full-text-button
  const editTextButton = document.querySelector(".edit-text-button");
  const editTextFullButton = document.querySelector(".edit-full-text-button");
  editTextButton.addEventListener("click", editButtonCallback);
  editTextFullButton.addEventListener("click", editButtonCallback);
  //Добавить Callback для поля поиска search-area
  const searchArea = document.querySelector(".search-area");
  searchArea.addEventListener("input", searchAreaInputCallback);
  //Добавить Callback для кнопки clear-search
  const clearSearch = document.querySelector(".clear-search");
  clearSearch.addEventListener("click", clearSearchCallback);
}

main();

//Добавляет задачу 
function addTaskElement (taskElementFromServer){
  const taskTableElement = document.querySelector(".task-table");
  const newTaskElement = createNewElement("div", "task");
  const newTextElement = createNewElement("span", "text");
  const newDeleteElement = createNewElement("div", "delete-task-button");
  const newCheckBoxElement = createNewElement("input", "is-completed");
  const newTaskDate = createNewElement("div", "task-date");
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
  //Задаем кнопке Удалить задачи Callback
  newDeleteElement.addEventListener("click", function(){
    deleteTask(this.parentElement.id)
  });
  //Задаем checkbox задачи Callback
  addOnclickIsCompleteCallback(newCheckBoxElement);
  // Задаем тексту Task-text задачи Callback
  addOnclickTaskTextCallback(newTextElement);
  //Собираем task элемент и добавляем Callback
  newTaskElement.append(newCheckBoxElement);
  newTaskElement.append(newTextElement);
  newTaskElement.append(newTaskDate);
  newTaskElement.append(newDeleteElement);
  //Добавляем задачу на экран
  taskTableElement.append(newTaskElement);
  
}

//Создает новый HTML элемент
function createNewElement(tag, classes){
  let newElement = document.createElement(tag);
  if (Array.isArray(classes)){
      for (let i = 0; i < classes.length; i++){
          newElement.classList.add(classes[i]);
      }
  } else {newElement.classList.add(classes);}
  return newElement;
}

//Callback для checkbox на нажатие
function addOnclickIsCompleteCallback(checkboxElement) {
  checkboxElement.onclick = function() {
    const taskElement = checkboxElement.parentElement;
    taskElement.classList.toggle("complete-task");
    updateTask(taskElement);
  }
}

//Callback для checkbox на нажатие
function addOnclickTaskTextCallback(taskTextElement) {
  taskTextElement.onclick = function() {
    const taskElement = taskTextElement.parentElement;
    const editWindow = document.querySelector(".edit-window");
    const taskEditText = document.querySelector(".task-edit-text");
    const taskEditFullText = document.querySelector(".task-edit-full-text");
    editWindow.style.visibility = "visible";
    taskEditText.value = taskTextElement.textContent;
    taskEditFullText.value = taskElement.dataset.description;
    taskElement.classList.add("edited");   
  }
}

//Callback для автоизменения размера для submit-text textarea
function autoSizeNewTaskAreaCallback(){      
    if(this.clientHeight < this.scrollHeight){
      this.style.height = this.scrollHeight + "px";
    } else if (this.clientHeight > this.scrollHeight){
      this.style.height = this.scrollHeight + "px";
    }
}

//Отправить задачу на сервер send 
function submitTask(){
  const newTaskArea = document.querySelector(".new-task-area");
  if (newTaskArea.value === ''){alert("Нельзя добавить пустую задачу"); return;}
  const submitTaskObject = {};
  let submitString = "";
  submitTaskObject.title = newTaskArea.value;
  submitTaskObject.isCompleted = false;
  submitTaskObject.description = "";
  submitString = JSON.stringify(submitTaskObject);
  submitTaskObject.id = ""
  newTaskArea.value = '';
  newTaskArea.style.height = "35px";
   
  fetch('http://nkbelousov.site:3000/todos/', 
  { headers: {'Content-Type': 'application/json'}, 
    method: 'POST', 
    body: submitString
    }
  ).then(updateTasksFromServer);
}

//Обновить задачи
function updateTasksFromServer(){
  //Удалим все отображённые задачи;
  for (const taskElement of document.querySelectorAll(".task")) {
    taskElement.remove();
  }
  //Загрузим задачи с сервера
  fetch('http://nkbelousov.site:3000/todos/')
  .then((response) => response.json())
  .then((allTasks) => {
    if (allTasks.length === 0){
      const newTaskElement = createNewElement("div", "task");
      const taskTableElement = document.querySelector(".task-table");
      newTaskElement.textContent = "На данный момент задач нет, добавьте новую задачу";
      newTaskElement.classList.add("no-tasks");
      taskTableElement.append(newTaskElement);
      return;
    }
    for (let i = 0; i < allTasks.length; i++){
      addTaskElement(allTasks[i]);
    }
  });
}

//Удалить задачу
function deleteTask(id){
  const fetObj = fetch("http://nkbelousov.site:3000/todos/" + id, 
      {method: 'DELETE'})
      .then(updateTasksFromServer);
}

//Обновить задачу 
function updateTask(currentTask){
  const id = currentTask.id;
  const submitTaskObject = {};
  let submitString = "";
  const taskDescription = currentTask.dataset.description;
  submitTaskObject.title = currentTask.querySelector(".text").textContent;
  submitTaskObject.isCompleted = currentTask.querySelector(".is-completed").checked;
  submitTaskObject.description = taskDescription;
  submitString = JSON.stringify(submitTaskObject);
  fetch(`http://nkbelousov.site:3000/todos/${id}`, 
  { headers: {'Content-Type': 'application/json'}, 
    method: 'PUT', 
    body: submitString
    }
  )
}

//Callback для поля ввода на нажатие "Enter"
function enterButtonForNewTaskAreaCallback(event){
      // Если кнопка не 'Enter' выйти
      if (event.keyCode !== 13) {return;}
      event.preventDefault();
      submitTask();
}


function dateFormat(date){
  const dateVocabulary = {
    Jun: "января",
    Feb: "февраля",
    Mar: "марта",
    Apr: "апреля",
    May: "мая",
    Jun: "июня",
    Jul: "июля",
    Aug: "августа",
    Sep: "сентября",
    Oct: "октября",
    Nov: "ноября",
    Dec: "декабря",
  };
  const splitDate = date.split(' ');
  return splitDate[2] + " " + dateVocabulary[splitDate[1]] + " " + splitDate[3];
};


//Callback для CloseEditWindow на нажатие
function closeEditWindowCallback(){
    const resultConfirm = confirm("Внесённые изменения будут удалены. Вы точно хотите выйти?")
    const editedTask = document.querySelector(".edited");
    if (resultConfirm) {
      const editWindow = document.querySelector(".edit-window");
      editWindow.style.visibility = "hidden";
    } else {return;}
    editedTask.classList.remove("edited");
    disableEditTextAreas();
}

//Callback для SaveEditButton на нажатие
function saveEditButtonCallback(){
    const editWindow = document.querySelector(".edit-window");
    const editedTask = document.querySelector(".edited");
    const editedTaskText = editedTask.querySelector(".text");
    const taskEditText = document.querySelector(".task-edit-text");
    const taskEditFullText = document.querySelector(".task-edit-full-text");
    //Меняем параметры задачи
    editedTaskText.textContent = taskEditText.value;
    editedTask.dataset.description = taskEditFullText.value;
    //Делаем поля нередактируемыми
    disableEditTextAreas();
    //Отправляем на сервер и закрываем окно
    updateTask(editedTask);
    editWindow.style.visibility = "hidden";
    editedTask.classList.remove("edited");
}

//Callback для edit кнопки
function editButtonCallback() {
  const editText = this.parentElement.querySelector("textarea");
  editText.disabled = false;
}

// Сделать поля для редактирования задачи disabled
function disableEditTextAreas(){
  const taskEditText = document.querySelector(".task-edit-text");
  const taskEditFullText = document.querySelector(".task-edit-full-text");
  taskEditText.disabled = true;
  taskEditFullText.disabled = true; 
}

//Добавить Callback для поля поиска search-area
function searchAreaInputCallback(){
    if (this.value == ""){
      hideOrShowAllTasks(false);
      return;
    }
    fetch('http://nkbelousov.site:3000/todos?search='+ this.value)
    .then((response) => response.json())
    .then((allFindedTasks) => {
      hideOrShowAllTasks(true);
      for (let i = 0; i < allFindedTasks.length; i++){
        const currentTask = document.getElementById(allFindedTasks[i].id);
        currentTask.classList.remove("hidden");
      }
    });
}

//Функция для того, чтобы скрыть или отобразить все задачи
function hideOrShowAllTasks(isHide){
  const allTasks = document.querySelectorAll(".task");
  for (let currentTask of allTasks){
    if (isHide) {
      currentTask.classList.add("hidden");
    } else {
      currentTask.classList.remove("hidden");
    }
  }
}

//Добавить Callback для кнопки clear-search
function clearSearchCallback(){
    this.parentElement.querySelector(".search-area").value = "";
    updateTasksFromServer();
}



