import { createNewElement } from "Project/helpers/createNewElement";
import { createFullTextAreaDiv } from "./full-text-area-div/full-text-area-div";
import { createEditFullTextButton } from "./edit-full-text-button/edit-full-text-button";
import "./description-edit-box.css";

export function createDescriptionEditBox() {
  const descriptionEditBox = createNewElement("div", "description-edit-box");
  descriptionEditBox.append(createFullTextAreaDiv());
  descriptionEditBox.append(createEditFullTextButton());

  return descriptionEditBox;
}
