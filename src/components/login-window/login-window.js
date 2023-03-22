import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { api } from "Project/api/api";
import { showNotification } from "Project/components/notifications/notifications.js";
import "./login-window.css";
export function addLoginWindow(){
    api.users.isLogged().
    then(() => {return;}).
    catch((error) => {
        try{
            if ((error.request.status === 404) || (error.request.status === 400)) {
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(<LoginWindow loginWindow={root}/>);
            } else {
                showNotification("Проблемы с сервером, обратитесь к администратору","center");
            }
        } catch {
            showNotification("Проблемы с сервером, обратитесь к администратору","center");
        }
    });
}

function LoginWindow(props){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    function enterButtonForLogin(event) {
        // Если кнопка не 'Enter' выйти
        if (event.keyCode !== 13) {
          return;
        }
        event.preventDefault();
        loginButtonCallback();
    }
    function loginButtonCallback(){
        api.users.login(login, password)
        .then(() => {
            const loginWindow = props.loginWindow;
            showNotification("Успешный вход","right-bottom");
            loginWindow.unmount();
        })
        .catch(() => {
            showNotification("Неправильный логин или пароль","right-bottom");
        });
    }

    return(
        <div className="login-window window"
        >
            <div className="panel login-table">
                <div className="panel login-box">
                    <div className='login-text'>
                        Чтобы продолжить введите логин и пароль
                    </div>
                    <div className='panel input-box'>
                        <input className='login-input text-input' 
                            placeholder='Введите логин'
                            type="text"
                            onInput={(event) => setLogin(event.target.value)}
                        />
                        <input className='password-input text-input' 
                            placeholder='Введите пароль'
                            type="password"
                            onKeyDown={enterButtonForLogin}
                            onInput={(event) => setPassword(event.target.value)}
                        />

                    </div>
                    <button className='big-button login-button'
                        onClick={loginButtonCallback}
                    >
                        Войти
                    </button>                 
                </div> 
            </div> 
        </div>
    );
}
