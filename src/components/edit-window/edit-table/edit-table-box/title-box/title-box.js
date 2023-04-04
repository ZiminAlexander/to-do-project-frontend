import React from "react";
import { TaskEditTitle } from "./task-edit-title/task-edit-title";
import { TitleEditBox } from "./title-edit-box/title-edit-box";

export function TitleBox(props) {

  return(
    <div className="title-box">
      <TaskEditTitle />
      <TitleEditBox editedTask={props.editedTask}
        setTitle={props.setTitle}
      />
    </div>
  );

}
