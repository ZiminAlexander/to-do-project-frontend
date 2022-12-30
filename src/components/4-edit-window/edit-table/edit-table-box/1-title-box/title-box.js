import { createNewElement } from "../../../../../helpers/createNewElement";
import { createTaskEditTitle } from "./1-task-edit-title/task-edit-title";
import { createTitleEditBox } from "./2-title-edit-box/title-edit-box";

export function createTitleBox(){
    const titleBox = createNewElement("div", "title-box");
    titleBox.append(createTaskEditTitle());
    titleBox.append(createTitleEditBox());

    return titleBox;
}