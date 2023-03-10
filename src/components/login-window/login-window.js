import { createNewElement } from "Project/helpers/createNewElement";
import { api } from "Project/api/api";
import { showNotification } from "Project/components/notifications/notifications.js";
import "./login-window.css";
export function addLoginWindow(){
    api.users.isLogged().
    then(() => {return;}).
    catch((error) => {
        try{
            if (error.response.data.error === "Такого пользователя нет") {
                const loginWindow = createNewElement("div",["login-window", "window"]);
                const loginTable =  createNewElement("div",["panel", "login-table"]);
                const loginBox =  createNewElement("div",["panel", "login-box"]);
                const inputBox =  createNewElement("div",["panel", "input-box"]);
                const loginText =  createNewElement("div",["login-text"]);
                const loginInput =  createNewElement("input",["login-input","text-input"]);
                const passwordInput =  createNewElement("input",["password-input","text-input"]);
                const loginButton =  createNewElement("button",["big-button", "login-button"]);
                loginButton.addEventListener("click", loginButtonCallback);
                loginText.textContent = "Чтобы продолжить введите логин и пароль";
                loginInput.placeholder = "Введите логин";
                passwordInput.placeholder = "Введите пароль";
                passwordInput.addEventListener("keydown", enterButtonForLogin);
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
            } else {
                showNotification("Проблемы с сервером, обратитесь к администратору","login");
            }
        } catch {
            showNotification("Проблемы с сервером, обратитесь к администратору","login");
        }
    });
}

function loginButtonCallback(){
    const login = document.querySelector(".login-input").value;
    const password = document.querySelector(".password-input").value;

    api.users.login(login, password)
    .then(() => {
        const loginWindow = document.querySelector(".login-window");
        showNotification("Успешный вход");
        loginWindow.remove();
    })
    .catch(() => {
        showNotification("Неправильный логин или пароль");
    });
}

function enterButtonForLogin(event) {
    // Если кнопка не 'Enter' выйти
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    loginButtonCallback();
  }