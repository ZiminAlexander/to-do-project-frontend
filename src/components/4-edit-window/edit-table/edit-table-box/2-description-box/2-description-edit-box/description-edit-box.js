import { createNewElement } from "../../../../../../helpers/createNewElement";
import { createFullTextAreaDiv } from "./1-full-text-area-div/full-text-area-div";
import { createEditFullTextButton } from "./2-edit-full-text-button/edit-full-text-button";
import "./description-edit-box.css";

export function createDescriptionEditBox(){
    const descriptionEditBox = createNewElement("div", "description-edit-box");
    descriptionEditBox.append(createFullTextAreaDiv());
    descriptionEditBox.append(createEditFullTextButton());

    return descriptionEditBox;
}