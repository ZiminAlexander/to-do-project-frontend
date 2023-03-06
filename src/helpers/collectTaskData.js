export function collectTaskData(currentTask) {
  const taskData = {};
  taskData.data = {};
  
  if (currentTask === undefined) {
    // taskData для новых задач
    const newTaskArea = document.querySelector(".new-task-area");
    taskData.data.title = newTaskArea.value;
    taskData.data.isCompleted = false;
    taskData.data.description = "";
  } else {
    // taskData для корректировки задачи
    const taskDescription = currentTask.dataset.description;
    taskData.data.title = currentTask.querySelector(".text").textContent;
    taskData.data.isCompleted =
      currentTask.querySelector(".is-completed").checked;
    taskData.data.description = taskDescription;
    taskData.id = currentTask.id;
  }
  
  return taskData;
}
