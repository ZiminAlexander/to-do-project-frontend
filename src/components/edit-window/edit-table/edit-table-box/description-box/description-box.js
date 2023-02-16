import { createNewElement } from "Project/helpers/createNewElement";
import { createTaskEditFullTextTitle } from "./task-edit-full-text-title/task-edit-full-text-title";
import { createDescriptionEditBox } from "./description-edit-box/description-edit-box";

export function createDescriptionBox() {
  const descriptionBox = createNewElement("div", "description-box");
  descriptionBox.append(createTaskEditFullTextTitle());
  descriptionBox.append(createDescriptionEditBox());

  return descriptionBox;
}
