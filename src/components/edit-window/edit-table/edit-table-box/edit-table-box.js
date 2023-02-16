import { createNewElement } from "Project/helpers/createNewElement";
import { createTitleBox } from "./title-box/title-box";
import { createDescriptionBox } from "./description-box/description-box";
import { createSaveEditButton } from "./save-edit-button/save-edit-button";
import { createCloseEditButton } from "./close-edit-button/close-edit-button";
import "./edit-table-box.css";

export function createEditTableBox() {
  const editTableBox = createNewElement("div", "edit-table-box");
  editTableBox.append(createTitleBox());
  editTableBox.append(createDescriptionBox());
  editTableBox.append(createSaveEditButton());
  editTableBox.append(createCloseEditButton());

  return editTableBox;
}
