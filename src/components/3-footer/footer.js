import {createNewElement} from "../../helpers/createNewElement";
import "./footer.css";

export function addFooter(){
    const telephone = createNewElement("div", "telephone");
    telephone.innerHTML = "8 (900) 000-00-00";
    const mail = createNewElement("div", "mail");
    mail.innerHTML = "mail@mail.ru";
    const author = createNewElement("div", "author");
    author.innerHTML = "Ivan Ivanov";
    const footerElement = createNewElement("footer", "footer");

    footerElement.append(telephone);
    footerElement.append(mail);
    footerElement.append(author);
    document.body.append(footerElement);
}