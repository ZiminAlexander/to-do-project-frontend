import { createNewElement } from "Project/helpers/createNewElement";
import { createEditTable } from "./edit-table/edit-table";
import "./edit-window.css";

export function addEditWindow() {
  const editWindow = createNewElement("div", "edit-window");
  editWindow.append(createEditTable());

  document.body.append(editWindow);
}
