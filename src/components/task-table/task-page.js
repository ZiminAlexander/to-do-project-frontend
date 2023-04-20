import React, { useEffect, useState} from "react";
import { flushSync } from 'react-dom';
import { SearchForm } from "./search-form/search-form";
import { NewTaskForm } from "./new-task-form/new-task-form.js";
import { Tasks } from "./task/task";
import { LoadingWindow } from "Project/components/loading-window/loading-window.js"
import { EditWindow } from "../edit-window/edit-window";
import { NotificationContext } from "Project/index.js";
import { api } from "Project/api/api";
import "./task-page.css";
import "./form-style.css";
import "./spinner.css";

export const TaskPage = () => {
  const [allTasks, setAllTasks] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [editTaskID, setEditTaskID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchAreaElement, setSearchAreaElement] = useState(null);
  const setNotificationOptions = React.useContext(NotificationContext);
  const [timeoutID, setTimeoutID] = useState(null);

  const clearSearchArea = () => {
    searchAreaElement.current.value = "";
    setSearchFilter("");
  }

  const searchAreaInputChange = () => {
    const startSearchFilter = searchAreaElement.current.value;
    if (startSearchFilter.length > 200) {
      setNotificationOptions({textOfNotification: "Строка поиска не должна включать более 200 символов", 
        position: "right-bottom"}
      ) 
      return;
    }
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    setTimeoutID( setTimeout(() => {
      if (startSearchFilter === searchAreaElement.current.value) {
        setSearchFilter(startSearchFilter);
      }
    }, 600))
  }    

  const getEditedTask = (editTaskID) => {
    for (let i = 0; i < allTasks.length; i++){
      if (allTasks[i].id === editTaskID){
        const editedTask = allTasks[i];
        return (
          {
            id: editedTask.id, 
            data: {
              title: editedTask.title,
              isCompleted: editedTask.isCompleted, 
              description: editedTask.description}
          }
        );
      }
    }
  }

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
  
  useEffect(updateTasksFromServer, []);
  useEffect(updateTasksFromServer, [searchFilter]);

  return(
    <div className="task-page">
      <div className={"task-table" + (isLoading ? " loading" : "")}>
        <SearchForm setSearchAreaElement={setSearchAreaElement}
          clearSearchArea={clearSearchArea}
          searchAreaInputChange={searchAreaInputChange}

        />
      <NewTaskForm updateTasksFromServer={updateTasksFromServer} />
      </div>
      <div className="task-field">
        {allTasks !== null ? 
          <Tasks updateTasksFromServer={updateTasksFromServer}
            allTasks={allTasks}
            setEditTaskID={setEditTaskID}
            getEditedTask={getEditedTask}
          /> 
          : null
        }
      </div>
      {isLoading ? 
        <LoadingWindow />
        : null
      }
      {(editTaskID !== "") ?
        <EditWindow 
          editedTask={getEditedTask(editTaskID)}
          setEditTaskID={setEditTaskID}
          updateTasksFromServer={updateTasksFromServer}
        />
        : null
      }
    </div>
  );
}
