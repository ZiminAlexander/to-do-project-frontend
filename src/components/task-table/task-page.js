import React, { useEffect, useState } from "react";
import { SearchForm } from "./search-form/search-form";
import { NewTaskForm } from "./new-task-form/new-task-form.js";
import { Tasks } from "./task/task";
import { LoadingWindow } from "Project/components/loading-window/loading-window.js"
import { EditWindow } from "../edit-window/edit-window";
import { api } from "Project/api/api";
import "./task-page.css";
import "./form-style.css";
import "./spinner.css";


export function TaskPage() {
  const [allTasks, setAllTasks] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [editTaskID, setEditTaskID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const updateTasksFromServer = (currentSearchFilter) => {
    setIsLoading(true);
    if (currentSearchFilter === undefined) {
      currentSearchFilter = searchFilter;
    }
    let apiAnswer = {};
    let apiTasksArray = [];
    if (currentSearchFilter === "") {
      apiAnswer = api.tasks.load();
    } else {
      apiAnswer = api.tasks.search(currentSearchFilter);
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

  return(
    <div className="task-page">
      <div className={"task-table" + (isLoading ? " loading" : "")}>
        <SearchForm updateTasksFromServer={updateTasksFromServer}
          setSearchFilter={setSearchFilter}
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
