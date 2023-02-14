import { createNewElement } from "Project/helpers/createNewElement";
import { createEditTableBox } from "./edit-table-box/edit-table-box";
import "./edit-table.css";
import "./edit-button.css";

export function createEditTable() {
  const editTable = createNewElement("div", ["edit-table", "panel"]);
  editTable.append(createEditTableBox());

  return editTable;
}
