import { createNewElement } from "Project/helpers/createNewElement";
import { createTextAreaDiv } from "./text-area-div/text-area-div";
import { createEditTextButton } from "./edit-text-button/edit-text-button";
import "./title-edit-box.css";

export function createTitleEditBox() {
  const titleEditBox = createNewElement("div", "title-edit-box");
  titleEditBox.append(createTextAreaDiv());
  titleEditBox.append(createEditTextButton());

  return titleEditBox;
}
