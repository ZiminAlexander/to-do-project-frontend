import React, { useEffect, useState } from "react";
import { SearchForm } from "./search-form/search-form";
import { NewTaskForm } from "./new-task-form/new-task-form.js";
import { Tasks } from "./task/task";
import { LoadingWindow } from "Project/components/loading-window/loading-window.js"
import { EditWindow } from "../edit-window/edit-window";
import { api } from "Project/api/api";
import "./task-page.css";
import "./form-style.css";


export function TaskPage() {
  const [allTasks, setAllTasks] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [editTaskID, setEditTaskID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getEditedTask = (editTaskID) => {
    for (let i = 0; i < allTasks.length; i++){
      if (allTasks[i].id === editTaskID){
        return Object.create(allTasks[i]);
      }
    }
  }

  const updateTasksFromServer = (currentSearchFilter) => {
    setIsLoading(true);
    if (currentSearchFilter === undefined) {
      currentSearchFilter = searchFilter;
    }
    let apiAnswer = {};
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
          setAllTasks(apiTasks.data);
          setIsLoading(false);
        }
      })
      .catch(() => {
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
        <NewTaskForm updateTasksFromServer={updateTasksFromServer}/>
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
