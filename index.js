
//Загружает задачи с сервера
function loadTasks(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((allTasks) => { 

  for (let i = 0; i < 10; i++){
    addTackElement(allTasks[i].title);
  }

});
}

//Добавляет задачу
function addTackElement (taskText){
    const taskTableElement = document.querySelector(".task-table");
    const newTaskElement = createNewElement("div", "task");
    const newTextElement = createNewElement("span", "text");
    newTextElement.innerHTML = taskText;
    const newCheckBoxElement = createNewElement("input", "is-completed");
    newCheckBoxElement.type = "checkbox";
    newCheckBoxElement.disabled = true;

    //Собираем task элемент и добавляем
    newTaskElement.append(newTextElement);
    newTaskElement.append(newCheckBoxElement);
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

loadTasks();
