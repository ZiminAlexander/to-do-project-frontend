import { createNewElement } from "Helpers/createNewElement";
import { createEditTableBox } from "./edit-table-box/edit-table-box";
import "./edit-table.css";

export function createEditTable(){
    const editTable = createNewElement("div","edit-table");
    editTable.append(createEditTableBox());

    return editTable;
}