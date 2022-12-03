//Загрузим задачи с сервера
updateTasksFromServer();
//Callback для Кнопки "Добавить"
addOnclickSubmitCallback()

//Добавляет задачу 
// {title: 'New Title', isCompleted: false, id: 'b3b42e18-f882-47bd-b6c8-381a2b62bec6', createdAt: 'Sat Dec 03 2022'}
function addTackElement (taskElementFromServer){
  const taskTableElement = document.querySelector(".task-table");
  const newTaskElement = createNewElement("div", "task");
  const newTextElement = createNewElement("span", "text");
  newTextElement.innerHTML = taskElementFromServer.title;
  newTaskElement.id =  taskElementFromServer.id;
  newTaskElement.dataset.createdTime = taskElementFromServer.createdAt;

  const newCheckBoxElement = createNewElement("input", "is-completed");
  newCheckBoxElement.type = "checkbox";
  if (taskElementFromServer.isCompleted){
    newCheckBoxElement.checked = true;
  }
  newCheckBoxElement.disabled = true;

  //Собираем task элемент и добавляем
  newTaskElement.append(newTextElement);
  newTaskElement.append(newCheckBoxElement);
  addOnclickCompleteCallback(newTaskElement);
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

//Добавить задаче отзыв на нажатие
function addOnclickCompleteCallback(HTMLelement) {
  HTMLelement.onclick = function() {
    HTMLelement.style.backgroundColor = "#c1ffb0"; 
    HTMLelement.style.textDecoration = "line-through solid red";
    HTMLelement.querySelector("input").checked = true;
  }
}

//Добавить кнопке "Добавить" отзыв на нажатие
function addOnclickSubmitCallback() {
  const submitButton = document.querySelector(".submit-new-task");
  submitButton.onclick = submitTask;
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
