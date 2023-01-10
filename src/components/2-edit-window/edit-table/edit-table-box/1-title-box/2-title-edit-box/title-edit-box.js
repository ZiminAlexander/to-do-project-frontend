import { createNewElement } from "Helpers/createNewElement";
import { createTextAreaDiv } from "./1-text-area-div/text-area-div";
import { createEditTextButton } from "./2-edit-text-button/edit-text-button";
import "./title-edit-box.css";

export function createTitleEditBox(){
    const titleEditBox = createNewElement("div", "title-edit-box");
    titleEditBox.append(createTextAreaDiv());
    titleEditBox.append(createEditTextButton());

    return titleEditBox;
}
