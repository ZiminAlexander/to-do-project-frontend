import React from "react";
import { FullTextAreaDiv } from "./full-text-area-div/full-text-area-div";
import { EditFullTextButton } from "./edit-full-text-button/edit-full-text-button";
import "./description-edit-box.css";

export function DescriptionEditBox(props) {

  return(
    <div className="description-edit-box">
      <FullTextAreaDiv editedTask={props.editedTask}
         setDescription={props.setDescription}
      />
      <EditFullTextButton />
    </div>
  );

}
