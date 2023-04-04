import React from 'react';
import { useState } from 'react';
import { api } from "Project/api/api";
import { showNotification } from "Project/components/notifications/notifications.js";
import "./login-window.css";
export function LoginWindow(props){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);
    const [isErrorLogin, setIsErrorLogin] = useState(false);
    const loginButtonCallback = () => {
        api.users.login(login, password)
        .then(() => {
            props.setIsNeedLogin(false);
            showNotification("Успешный вход","right-bottom");
        })
        .catch(() => {
            setIsErrorLogin(true);
            showNotification("Неправильный логин или пароль","right-bottom");
        });
    }
    const enterButtonForLogin = (event) => {
        // Если кнопка не 'Enter' выйти
        if (event.keyCode !== 13) {
          return;
        }
        event.preventDefault();
        loginButtonCallback();
    }
    return(
        <div className="login-window window"
        >
            <div className="login-table">
                <div className='login-text'>
                    Авторизация
                </div>
                <div className="login-input-box login-box">
                    <input className={"login-input login-text-input" + (isErrorLogin ? " error-login" : "")} 
                        placeholder='Введите логин'
                        type="text"
                        onInput={(event) => setLogin(event.target.value)}
                    />
                    <div className='login-icon left-icon'/>
                    <div className='login-empty right-icon'/>
                </div>
                <div className='password-input-box login-box'>
                    <input className={"password-input login-text-input" + (isErrorLogin ? " error-login" : "")}
                        placeholder='Введите пароль'
                        type= {isHiddenPassword ? "password" : "text"}
                        onKeyDown={enterButtonForLogin}
                        onInput={(event) => setPassword(event.target.value)}
                    />
                    <div className='password-icon-lock left-icon'/>
                    <div className='password-icon-view right-icon'
                        onMouseDown={() => setIsHiddenPassword(false)}
                        onMouseLeave={() => setIsHiddenPassword(true)} 
                    />
                </div>
                <button className='login-button'
                    onClick={loginButtonCallback}
                >
                    Войти
                </button>                 
            </div> 

        </div>
    );
}
