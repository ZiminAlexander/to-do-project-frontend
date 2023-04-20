import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { Header } from "Project/components/header/header";
import { Footer } from "Project/components/footer/footer";
import { TaskPage } from './components/task-table/task-page';
import { LoginWindow } from "./components/login-window/login-window";
import { api } from "Project/api/api";
import { Notification } from "./components/notification/notification";
import "./main-styles/buttons.css";
import "./main-styles/index.css";
import "./main-styles/task-page.css";
import "./main-styles/panel.css";
import "./main-styles/text-input.css";

export const NotificationContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

//Собираем страницу
root.render(<App />)

function App(){

    const [isNeedLogin, setIsNeedLogin] = useState(false);
    const [notificationOptions, setNotificationOptions] = useState(null);

    useEffect(() => {
        api.users.isLogged().
        then(() => {setIsNeedLogin(false);}).
        catch((error) => {
            try{
                if ((error.request.status !== 404) && (error.request.status !== 400)) {
                    setNotificationOptions({textOfNotification: "Проблемы с сервером, обратитесь к администратору", 
                        position: "center"}
                    ) 
                } else {
                  setIsNeedLogin(true);
                }
            } catch(error) {
                setNotificationOptions({textOfNotification: "Проблемы с сервером, обратитесь к администратору", 
                    position: "center"}
                ) 
            }
        });
      }, []);

    return(
        <Fragment>
            <Header />
            <NotificationContext.Provider 
                value={setNotificationOptions}
            >
                <TaskPage />
            </NotificationContext.Provider>
            <Footer />
            {isNeedLogin ?
                <NotificationContext.Provider 
                    value={setNotificationOptions}
                >
                    <LoginWindow setIsNeedLogin={setIsNeedLogin}/>
                </NotificationContext.Provider>
            : null
            }
            {(notificationOptions) && 
             <Notification notificationOptions={notificationOptions} 
                setNotificationOptions={setNotificationOptions}
             />
            }
        </Fragment>
    );
}