import { createNewElement } from "Project/helpers/createNewElement";
import "./login-window.css";
export function addLoginWindow(){
    const loginWindow = createNewElement("div",["login-window", "window"]);
    const loginTable =  createNewElement("div",["panel", "login-table"]);
    const loginBox =  createNewElement("div",["panel", "login-box"]);
    const inputBox =  createNewElement("div",["panel", "input-box"]);
    const loginText =  createNewElement("div",["login-text"]);
    const loginInput =  createNewElement("input",["login-input","text-input"]);
    const passwordInput =  createNewElement("input",["password-input","text-input"]);
    const loginButton =  createNewElement("button",["big-button", "login-button"]);
    loginButton.addEventListener("click", function loginButtonCallback(){
        const fetchObject = { headers: { "Content-Type": "application/json" } };
        fetchObject.method = "POST";
        const submitTaskObject = {name: "John Doe", password: "test"};
        fetchObject.body = JSON.stringify(submitTaskObject);
        // fetchObject.credentials = "include";
        fetch("http://nkbelousov.site:3000/users/self")
        .then((response) => console.log(response.json()))
        .then((allTasks) => console.log(allTasks));
    });
    loginText.textContent = "Чтобы продолжить введите логин и пароль";
    loginInput.placeholder = "Введите логин";
    passwordInput.placeholder = "Введите пароль";
    passwordInput.type = "password";
    loginButton.textContent = "Войти";
    inputBox.append(loginInput);
    inputBox.append(passwordInput);
    loginBox.append(loginText);
    loginBox.append(inputBox);
    loginBox.append(loginButton);
    loginTable.append(loginBox);
    loginWindow.append(loginTable);
    document.body.append(loginWindow);
}