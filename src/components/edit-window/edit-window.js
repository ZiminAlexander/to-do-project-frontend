import { createNewElement } from "Project/helpers/createNewElement";
import { createEditTable } from "./edit-table/edit-table";
import { closeEditWindow } from "./edit-table/edit-table-box/close-edit-button/close-edit-button";
import "./edit-window.css";

export function addEditWindow() {

  const existedEditWindow = document.querySelector(".edit-window");
  if (existedEditWindow) {
    closeEditWindow();
  }

  const editWindow = createNewElement("div", ["edit-window", "window"]);
  editWindow.append(createEditTable());

  document.body.append(editWindow);
}
