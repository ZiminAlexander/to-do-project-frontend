import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { Header } from "Project/components/header/header";
import { Footer } from "Project/components/footer/footer";
import { TaskPage } from './components/task-table/task-page';
import { LoginWindow } from "./components/login-window/login-window";
import { api } from "Project/api/api";
import "./main-styles/buttons.css";
import "./main-styles/index.css";
import "./main-styles/task-page.css";
import "./main-styles/panel.css";
import "./main-styles/text-input.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Собираем страницу
root.render(<App />)

function App(){

    const [isNeedLogin, setIsNeedLogin] = useState(false);

    useEffect(() => {
        api.users.isLogged().
        then(() => {setIsNeedLogin(false);}).
        catch((error) => {
            try{
                if ((error.request.status !== 404) && (error.request.status !== 400)) {
                  showNotification("Проблемы с сервером, обратитесь к администратору","center");
                } else {
                    setIsNeedLogin(true);
                }
            } catch(error) {
              showNotification("Проблемы с сервером, обратитесь к администратору","center");
            }
        });
      }, []);

    return(
        <>
            <Header />
            <TaskPage />
            <Footer />
            {isNeedLogin ? 
             <LoginWindow setIsNeedLogin={setIsNeedLogin}/>
            : null
            }
            
        </>
    );
}