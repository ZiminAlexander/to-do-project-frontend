//Загрузим задачи с сервера
updateTasksFromServer();

//Добавить Callback для кнопки "+" Submit button
addOnclickSubmitCallback();
//Добавить Callback для кнопки Submit Button кнопкой Enter
addOnclickNewTaskAreaCallback();
//Добавить Callback для поля Submit New Task Text Area
addInputNewTaskAreaCallback();
//Добавить Callback для кнопки Close EditWindow Button
addCloseEditWindowCallback();
//Добавить Callback для кнопки Save Edit Button
addSaveEditButtonCallback();

//Добавляет задачу 
function addTackElement (taskElementFromServer){
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
  newTaskElement.dataset.description = "";
  //Корректируем чекбокс для задачи
  newCheckBoxElement.type = "checkbox";
  if (taskElementFromServer.isCompleted){
    newCheckBoxElement.checked = true;
    newTaskElement.classList.add("complete-task");
  }
  //Устанавливаем дату с сервера
  newTaskDate.innerHTML = dateFormat(taskElementFromServer.createdAt);
  //Задаем кнопке Удалить задачи Callback
  newDeleteElement.onclick = function(){deleteTask(this.parentElement.id)};
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

//Callback для кнопки "Добавить" на нажатие
function addOnclickSubmitCallback() {
  const submitButton = document.querySelector(".submit-new-task");
  submitButton.onclick = submitTask;
}

//Callback для автоизменения размера для submit-text textarea
function addInputNewTaskAreaCallback(){
  document.querySelector(".new-task-area").addEventListener("input", function() {      
    if(this.clientHeight < this.scrollHeight){
      this.style.height = this.scrollHeight + "px";
    } else if (this.clientHeight > this.scrollHeight){
      this.style.height = this.scrollHeight + "px";
    }
  });
}

//Отправить задачу на сервер
function submitTask(){
  const newTaskArea = document.querySelector(".new-task-area");
  if (newTaskArea.value === ''){alert("Нельзя добавить пустую задачу"); return;}
  const submitTaskObject = {};
  submitTaskObject.title = newTaskArea.value;
  submitTaskObject.isCompleted = false;
  const submitString = JSON.stringify(submitTaskObject);
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
    for (let i = 0; i < allTasks.length; i++){
      addTackElement(allTasks[i]);
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
  const submitTaskObject = {};
  submitTaskObject.title = currentTask.querySelector(".text").textContent;
  submitTaskObject.isCompleted = currentTask.querySelector(".is-completed").checked;
  const submitString = JSON.stringify(submitTaskObject);
  const id = currentTask.id;
  fetch(`http://nkbelousov.site:3000/todos/${id}`, 
  { headers: {'Content-Type': 'application/json'}, 
    method: 'PUT', 
    body: submitString
    }
  )
}

//Callback для поля ввода на нажатие "Enter"
function addOnclickNewTaskAreaCallback(){
  const newTaskAreaElement = document.querySelector('.new-task-area');
  newTaskAreaElement.addEventListener(
    'keydown', (event) => {
      // Если кнопка не 'Enter' выйти
      if (event.keyCode !== 13) return
      event.preventDefault();
      submitTask();
    })
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
function addCloseEditWindowCallback(){
  const closeEditButton = document.querySelector(".close-edit-button");
  closeEditButton.addEventListener("click", () => {
    const resultConfirm = confirm("Внесённые изменения будут удалены. Вы точно хотите выйти?")
    const editedTask = document.querySelector(".edited");
    if (resultConfirm) {
      const editWindow = document.querySelector(".edit-window");
      editWindow.style.visibility = "hidden";
    }
    editedTask.classList.remove("edited");
  })
}

//Callback для SaveEditButton на нажатие
function addSaveEditButtonCallback(){
  const saveEditButton = document.querySelector(".save-edit-button");
  saveEditButton.addEventListener("click", function(){
    const editWindow = document.querySelector(".edit-window");
    const editedTask = document.querySelector(".edited");
    const editedTaskText = editedTask.querySelector(".text");
    const taskEditText = document.querySelector(".task-edit-text");
    const taskEditFullText = document.querySelector(".task-edit-full-text");
    editedTaskText.textContent = taskEditText.value;
    editedTask.dataset.description = taskEditFullText.value;
    updateTask(editedTask);
    editWindow.style.visibility = "hidden";
    editedTask.classList.remove("edited");
  })
}
