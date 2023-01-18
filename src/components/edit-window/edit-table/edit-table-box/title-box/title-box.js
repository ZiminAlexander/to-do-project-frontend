import { createNewElement } from "Project/helpers/createNewElement";
import { createTaskEditTitle } from "./task-edit-title/task-edit-title";
import { createTitleEditBox } from "./title-edit-box/title-edit-box";

export function createTitleBox(){
    const titleBox = createNewElement("div", "title-box");
    titleBox.append(createTaskEditTitle());
    titleBox.append(createTitleEditBox());

    return titleBox;
}