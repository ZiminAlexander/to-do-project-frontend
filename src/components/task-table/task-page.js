import React, { useEffect, useState } from "react";
import { SearchForm } from "./search-form/search-form";
import { NewTaskForm } from "./new-task-form/new-task-form.js";
import { Tasks } from "./task/task";
import { LoadingWindow } from "Project/components/loading-window/loading-window.js"
import { EditWindow } from "../edit-window/edit-window";
import { NotificationContext } from "Project/index.js";
import { api } from "Project/api/api";
import { dateFormat } from "Project/helpers/dateFormat";
import { IsCompletedCheckbox } from "Project/components/task-table/task/is-completed/is-completed";
import { Text } from "Project/components/task-table/task/text/text";
import { TaskDate } from "Project/components/task-table/task/task-date/task-date";
import { DeleteTaskButton } from "Project/components/task-table/task/delete-task-button/delete-task-button";
import "./task-page.css";
import "./form-style.css";
import "./spinner.css";

export const TaskPage = () => {

  const setNotificationOptions = React.useContext(NotificationContext);
  const [allTasks, setAllTasks] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [editTaskID, setEditTaskID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchAreaElement, setSearchAreaElement] = useState(null);
  const [timeoutID, setTimeoutID] = useState(null);
  const [deleteTaskID, setDeleteTaskID] = useState("");
  const [isLoadingDelete, setIsLoadingDelete] = useState(null);
  const [tasksArray, setTaskArray] = useState([]);
  const [newTitleForEditedTask, setNewTitleForEditedTask] = useState("");
  const [newDescriptionForEditedTask, setNewDescriptionForEditedTask] = useState("");
  const [isLoadingSaveEditedTask, setIsLoadingSaveEditedTask] = useState(false);

  //Очистить поле поиска
  const clearSearchArea = () => {
    searchAreaElement.current.value = "";
    setSearchFilter("");
  }

  //Установить фильтр поиска при изменении поля введения более чем на 0,6 сек.
  const searchAreaInputChange = () => {
    const startSearchFilter = searchAreaElement.current.value;
    if (startSearchFilter.length > 200) {
      setNotificationOptions({
        textOfNotification: "Строка поиска не должна включать более 200 символов",
        position: "right-bottom"
      }
      )
      return;
    }
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    setTimeoutID(setTimeout(() => {
      if (startSearchFilter === searchAreaElement.current.value) {
        setSearchFilter(startSearchFilter);
      }
    }, 600))
  }

  //Получить объект для обновления задачи на сервере по ID
  const getEditedTask = (editTaskID) => {
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].id === editTaskID) {
        const editedTask = allTasks[i];
        return (
          {
            id: editedTask.id,
            data: {
              title: editedTask.title,
              isCompleted: editedTask.isCompleted,
              description: editedTask.description
            }
          }
        );
      }
    }
  }

  //Обновить задачи с сервера с учётом фильтра поиска
  const updateTasksFromServer = () => {
    setIsLoading(true);
    let apiAnswer = {};
    let apiTasksArray = [];
    if (searchFilter === "") {
      apiAnswer = api.tasks.load();
    } else {
      apiAnswer = api.tasks.search(searchFilter);
    }
    //Загрузим задачи с сервера
    apiAnswer
      .then((apiTasks) => {
        //Если в ответе нет задач
        if (apiTasks.data.length === 0) {
          setAllTasks("NoTasks");
          setIsLoading(false);
        } else {
          apiTasksArray = apiTasks.data;
          apiTasksArray.sort((a, b) => {
            if ((a.createdAt) > (b.createdAt)) {
              return 1;
            } else {
              return -1;
            }
          })
          setAllTasks(apiTasksArray);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error)
        setAllTasks("ServerError");
        setIsLoading(false);
      });
  }

  //Обновить задачи при изменении фильтра поиска
  useEffect(updateTasksFromServer, [searchFilter]);

  //Отправить задачу на сервер 
  const submitTask = (newTask, setIsLoadingNewTaskFunction) => {
    if (newTask.trim() === "") {
      setNotificationOptions({
        textOfNotification: "Нельзя добавить пустую задачу",
        position: "right-bottom"
      })
      return;
    }

    //Формируем объект для отправки на сервер
    const taskData = {
      data: {
        title: newTask,
        isCompleted: false,
        description: "",
      }
    }
    //Отправляем задачу на сервер
    api.tasks.submit(taskData).then(() => {
      setIsLoadingNewTaskFunction(false);
      updateTasksFromServer();
    });

  }

  //Создать отображение одной задачи
  const createTasksArray = (currentTask, i) => {

    const isCompleted = currentTask.isCompleted;
    const createdDate = dateFormat(currentTask.createdAt);
    const currentTaskID = currentTask.id;

    const updateIsComplete = () => {
      const changeCompleteTask = getEditedTask(currentTaskID);
      changeCompleteTask.data.isCompleted = !changeCompleteTask.data.isCompleted;
      return api.tasks.update(changeCompleteTask);
    }
    //Обновить на сервере состояние задачи
    const changeIsComplete = () => {
      updateIsComplete(currentTaskID)
        .then(updateTasksFromServer)
    }
    //Удалить задачу
    const deleteTask = () => {
      setDeleteTaskID(currentTaskID);
    }
    //Открыть окно редактирования задачи
    const openEditWindow = (editedTask) => {
      setEditTaskID(currentTaskID);
      setNewTitleForEditedTask(editedTask.title);
      setNewDescriptionForEditedTask(editedTask.description);
    }

    return (
      <div className={`task form panel ${isCompleted ? " complete-task" : ""}`}
        id={currentTaskID}
        key={i}
      >
        <IsCompletedCheckbox isCompleted={isCompleted}
          changeIsComplete={changeIsComplete}
        />
        <Text title={currentTask.title}
          openEditWindow={() => { openEditWindow(currentTask) }}
        />
        <TaskDate createdDate={createdDate} />
        <DeleteTaskButton
          deleteTask={deleteTask}
          isLoadingDelete={isLoadingDelete}
        />
      </div>
    );
  }

  //Удалить задачу на сервере и обновить задачи
  useEffect(() => {
    if (deleteTaskID !== "") {
      setNotificationOptions({
        textOfNotification: "Задача будет удалена без возможности восстановления. Вы точно хотите удалить задачу?",
        position: "center-confirm",
        yesCallback: () => {
          setIsLoadingDelete(true);
          setDeleteTaskID("");
          api.tasks.remove(deleteTaskID).then(() => {
            setIsLoadingDelete(false);
            updateTasksFromServer();
          });
        },
        noCallback: () => {
          setDeleteTaskID("");
        },
      })
    }
  }, [deleteTaskID])

  //Создать отображение всех задач
  useEffect(() => {
    if (allTasks === null) {
      return;
    }
    if (allTasks === "ServerError") {
      const tasksArrayVar =
        <div className="task form panel">
          Нет соединения с сервером, пожалуйста, обратитесь к администратору.
        </div>
      setTaskArray(tasksArrayVar);
    } else if (allTasks === "NoTasks") {
      const tasksArrayVar =
        <div className="task form panel">
          На данный момент задач нет, добавьте новую задачу, или введите другие критерии поиска.
        </div>
      setTaskArray(tasksArrayVar);
    } else {
      const tasksArrayVar = allTasks.map(createTasksArray);
      setTaskArray(tasksArrayVar);
    }
  }, [allTasks])

  //Изменилась ли задача в окне редактирования?
  const isChangeTask = () => {
    const editedTask = getEditedTask(editTaskID);
    const editTitle = editedTask.data.title;
    const editDescription = editedTask.data.description;
    if ((newTitleForEditedTask !== editTitle) || (newDescriptionForEditedTask !== editDescription)) {
      return true;
    } else {
      return false;
    }
  }

  //Обновить задачу на сервере после редактирования
  const updateTaskAfterEdit = () => {
    const editedTask = getEditedTask(editTaskID);
    editedTask.data.title = newTitleForEditedTask;
    editedTask.data.description = newDescriptionForEditedTask;
    return api.tasks.update(editedTask);
  }

  //Коллбэк кнопки "сохранить" в окне редактирования
  const saveEditButtonCallBack = () => {
    if (!isChangeTask()) {
      setEditTaskID("");
      return;
    }
    setIsLoadingSaveEditedTask(true);
    updateTaskAfterEdit().then(() => {
      setIsLoadingSaveEditedTask(false);
      setEditTaskID("");
      updateTasksFromServer();
    })
  }

  //Коллбэк кнопки "закрыть" в окне редактирования
  const closeEditButtonCallback = () => {
    if (!isChangeTask()) {
      setEditTaskID("");
      return;
    }
    setNotificationOptions({
      textOfNotification: "Внесённые изменения будут удалены. Вы точно хотите выйти?",
      position: "center-confirm",
      yesCallback: () => { setEditTaskID("") },
      noCallback: () => { return; },
    })
  }

  //Рендеринг Страницы задач
  return (
    <div className="task-page">
      <div className={`task-table ${isLoading ? " loading" : ""}`}>
        <SearchForm setSearchAreaElement={setSearchAreaElement}
          clearSearchArea={clearSearchArea}
          searchAreaInputChange={searchAreaInputChange}
        />
        <NewTaskForm submitTask={submitTask} />
      </div>
      <div className="task-field">
        {(allTasks !== null) ?
          <Tasks tasksArray={tasksArray} />
          : null
        }
      </div>
      {isLoading ?
        <LoadingWindow />
        : null
      }
      {(editTaskID !== "") ?
        <EditWindow
          newTitle={newTitleForEditedTask}
          setNewTitle={setNewTitleForEditedTask}
          newDescription={newDescriptionForEditedTask}
          setNewDescription={setNewDescriptionForEditedTask}
          saveEditButtonCallBack={saveEditButtonCallBack}
          isLoadingSave={isLoadingSaveEditedTask}
          closeEditButtonCallback={closeEditButtonCallback}
        />
        : null
      }
    </div>
  );
}
