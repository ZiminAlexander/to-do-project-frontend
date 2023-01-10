import { createNewElement } from "Helpers/createNewElement";
import { createTitleBox } from "./1-title-box/title-box";
import { createDescriptionBox } from "./2-description-box/description-box";
import { createSaveEditButton } from "./3-save-edit-button/save-edit-button";
import { createCloseEditButton } from "./4-close-edit-button/close-edit-button";
import "./edit-table-box.css";


export function createEditTableBox(){
    const editTableBox = createNewElement("div","edit-table-box");
    editTableBox.append(createTitleBox());
    editTableBox.append(createDescriptionBox());
    editTableBox.append(createSaveEditButton());
    editTableBox.append(createCloseEditButton());

    return editTableBox;
}