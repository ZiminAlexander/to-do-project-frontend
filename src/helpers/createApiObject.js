export function createApiObject(currentTask) {
  const apiObject = {};
  apiObject.body = {};
  
  if (currentTask === undefined) {
    // apiObject для новых задач
    const newTaskArea = document.querySelector(".new-task-area");
    apiObject.body.title = newTaskArea.value;
    apiObject.body.isCompleted = false;
    apiObject.body.description = "";
  } else {
    // apiObject для корректировки задачи
    const taskDescription = currentTask.dataset.description;
    apiObject.body.title = currentTask.querySelector(".text").textContent;
    apiObject.body.isCompleted =
      currentTask.querySelector(".is-completed").checked;
    apiObject.body.description = taskDescription;
    apiObject.id = currentTask.id;
  }
  
  return apiObject;
}
