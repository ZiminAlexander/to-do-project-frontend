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

export const NotificationContext = React.createContext("without provider");

const root = ReactDOM.createRoot(document.getElementById("root"));

//Собираем страницу
root.render(<App />)

function App(){

    const [isNeedLogin, setIsNeedLogin] = useState(false);
    const [notificationOptions, setNotificationOptions] = useState({});
    const [isShowNotification, setIsShowNotification] = useState(false);

    useEffect(() => {
        api.users.isLogged().
        then(() => {setIsNeedLogin(false);}).
        catch((error) => {
            try{
                if ((error.request.status !== 404) && (error.request.status !== 400)) {
                    setNotificationOptions({textOfNotification: "Проблемы с сервером, обратитесь к администратору", 
                        position: "center"}
                    ) 
                    setIsShowNotification(true);
                } else {
                  setIsNeedLogin(true);
                }
            } catch(error) {
                setNotificationOptions({textOfNotification: "Проблемы с сервером, обратитесь к администратору", 
                    position: "center"}
                ) 
                setIsShowNotification(true);
            }
        });
      }, []);
    return(
        <Fragment>
            <Header />
            <NotificationContext.Provider 
                value={{setIsShowNotification: setIsShowNotification, 
                setNotificationOptions: setNotificationOptions}
                }
            >
                <TaskPage />
            </NotificationContext.Provider>
            <Footer />
            {isNeedLogin ?
                <NotificationContext.Provider 
                    value={{setIsShowNotification: setIsShowNotification, 
                        setNotificationOptions: setNotificationOptions}
                    }
                >
                    <LoginWindow setIsNeedLogin={setIsNeedLogin}/>
                </NotificationContext.Provider>
            : null
            }
            {isShowNotification ? 
             <Notification
                setIsShowNotification={setIsShowNotification}
                notificationOptions={notificationOptions}/>
            : null
            }
        </Fragment>
    );
}