export function createFetchObject(currentTask) {
  const fetchObject = { headers: { "Content-Type": "application/json" } };
  const submitTaskObject = {};
  let submitString = "";

  if (currentTask === undefined) {
    // fetchObject для новых задач
    const newTaskArea = document.querySelector(".new-task-area");
    submitTaskObject.title = newTaskArea.value;
    submitTaskObject.isCompleted = false;
    submitTaskObject.description = "";
    submitTaskObject.id = "";
  } else {
    // fetchObject для удаления, корректировки задачи
    const taskDescription = currentTask.dataset.description;
    submitTaskObject.title = currentTask.querySelector(".text").textContent;
    submitTaskObject.isCompleted =
      currentTask.querySelector(".is-completed").checked;
    submitTaskObject.description = taskDescription;
    fetchObject.id = currentTask.id;
  }
  submitString = JSON.stringify(submitTaskObject);
  fetchObject.body = submitString;
  return fetchObject;
}
