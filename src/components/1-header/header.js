import {createNewElement} from "../../helpers/createNewElement";
import "./header.css";
import logotypeURL from "../../images/complete.svg";

export function addHeader(){
    const logotype = createNewElement("img", "programm-logotype");
    logotype.src = logotypeURL;
    const programTitle = createNewElement("div", "program-title");
    programTitle.innerHTML = "Программа для того, чтобы делать дела!";
    const headerElement = createNewElement("header", "header");
    
    headerElement.append(logotype);
    headerElement.append(programTitle);
    document.body.append(headerElement);
}
