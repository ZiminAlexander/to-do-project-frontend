import React from "react";
import { TaskEditFullTextTitle } from "./task-edit-full-text-title/task-edit-full-text-title";
import { DescriptionEditBox } from "./description-edit-box/description-edit-box";

export function DescriptionBox(props) {

  return(
    <div className="description-box">
      <TaskEditFullTextTitle />
      <DescriptionEditBox editedTask={props.editedTask}
        setDescription={props.setDescription}
      />
    </div>
  );

}
