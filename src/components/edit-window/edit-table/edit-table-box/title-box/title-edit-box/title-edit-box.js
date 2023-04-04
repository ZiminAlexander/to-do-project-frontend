import React from "react";
import { TextAreaDiv } from "./text-area-div/text-area-div";
import { EditTextButton } from "./edit-text-button/edit-text-button";
import "./title-edit-box.css";

export function TitleEditBox(props) {

  return(
    <div className="title-edit-box">
      <TextAreaDiv editedTask={props.editedTask}
        setTitle={props.setTitle}
      />
      <EditTextButton />
    </div>
  );

}
