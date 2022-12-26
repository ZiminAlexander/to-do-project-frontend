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
  const newDeleteElement = createNewElement("button", "delete-task-button");
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
      this.disabled = "true";
      deleteTask(this.parentElement.id)
    }
  );
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
    editWindow.classList.remove("hidden");
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
  if (newTaskArea.value.trim() === ''){
    showNotification("Нельзя добавить пустую задачу"); 
    return;
  }
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
  let urlForFetch = 'http://nkbelousov.site:3000/todos';
  const searchFilter = document.querySelector(".search-area").value;
  if (searchFilter === "") {
    urlForFetch += '/';
  } else {
    urlForFetch += '?search=' + searchFilter;
  }
  //Загрузим задачи с сервера
  fetch(urlForFetch)
  .then((response) => response.json())
  .then((allTasks) => {
    //Удалим все отображённые задачи;
    for (const taskElement of document.querySelectorAll(".task")) {
      taskElement.remove();
    }
    //Сообщение при отсутствии задач;
    if (allTasks.length === 0){
      const newTaskElement = createNewElement("div", "task");
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

//Удалить задачу
function deleteTask(id){
  fetch("http://nkbelousov.site:3000/todos/" + id, 
      {method: 'DELETE'})
      .then(updateTasksFromServer)
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


//Callback для CloseEditButton на нажатие
function closeEditWindowCallback(){
  if (!isChangedInEditWindow() || confirm("Внесённые изменения будут удалены. Вы точно хотите выйти?")){
    closeEditWindow();
    return;
  }
}

//Функция для определения, есть ли изменения в EditWindow
function isChangedInEditWindow(){
  const editedTask = document.querySelector(".edited");
  const editedTaskText = editedTask.querySelector(".text");
  const editedTaskFullText = editedTask.dataset.description;
  const taskEditText = document.querySelector(".task-edit-text");
  const taskEditFullText = document.querySelector(".task-edit-full-text");
  const isEditTask = editedTaskText.textContent === taskEditText.value;
  const isEditDescription = editedTaskFullText === taskEditFullText.value;

  return !((isEditTask) && (isEditDescription))
}


// Функция, для закрытия окна редактирования
function closeEditWindow(){
  const editedTask = document.querySelector(".edited");
  const editWindow = document.querySelector(".edit-window");
  editedTask.classList.remove("edited");
  editWindow.classList.add("hidden");
  disableEditTextAreas();
}

//Callback для SaveEditButton на нажатие
function saveEditButtonCallback(){
    if (!isChangedInEditWindow()){
      closeEditWindow();
      return;
    }
    const editedTask = document.querySelector(".edited");
    const editedTaskText = editedTask.querySelector(".text");
    const taskEditText = document.querySelector(".task-edit-text");
    const taskEditFullText = document.querySelector(".task-edit-full-text");
    //Меняем параметры задачи
    editedTaskText.textContent = taskEditText.value;
    editedTask.dataset.description = taskEditFullText.value;
    //Отправляем на сервер и закрываем окно
    updateTask(editedTask);
    closeEditWindow();
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

//Добавить Callback для кнопки clear-search
function clearSearchCallback(){
    this.parentElement.querySelector(".search-area").value = "";
    updateTasksFromServer();
}

//Функция для отображения нотификаций
function showNotification(textOfNotification){
  const newNotification = createNewElement("div", "notification");
  const newTextOfNotification = createNewElement("div", "text-of-notification");
  const newCloseNotificationButton = createNewElement("button", "close-notification");
  newTextOfNotification.textContent = textOfNotification;
  newCloseNotificationButton.addEventListener("click", () => newNotification.remove());

  newNotification.append(newTextOfNotification);
  newNotification.append(newCloseNotificationButton);
  document.body.append(newNotification);

  setTimeout(() => newNotification.remove(), 3000);
}