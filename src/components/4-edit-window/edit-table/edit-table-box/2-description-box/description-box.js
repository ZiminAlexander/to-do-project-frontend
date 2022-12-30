import { createNewElement } from "../../../../../helpers/createNewElement";
import { createTaskEditFullTextTitle } from "./1-task-edit-full-text-title/task-edit-full-text-title";
import { createDescriptionEditBox } from "./2-description-edit-box/description-edit-box";

export function createDescriptionBox(){
    const descriptionBox = createNewElement("div", "description-box");
    descriptionBox.append(createTaskEditFullTextTitle());
    descriptionBox.append(createDescriptionEditBox());

    return descriptionBox;
}