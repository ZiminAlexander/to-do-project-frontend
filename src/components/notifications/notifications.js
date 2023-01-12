import "./notifications.css"
import { createNewElement } from "Project/helpers/createNewElement";

//Функция для отображения нотификаций
export function showNotification(textOfNotification){
    const newNotification = createNewElement("div", "notification");
    const newTextOfNotification = createNewElement("div", "text-of-notification");
    const newCloseNotificationButton = createNewElement("button", ["circle-button", "x-button", "close-notification-button"]);
    newTextOfNotification.textContent = textOfNotification;
    newCloseNotificationButton.addEventListener("click", function notificationCallback() {newNotification.remove()});
  
    newNotification.append(newTextOfNotification);
    newNotification.append(newCloseNotificationButton);
    document.body.append(newNotification);
  
    setTimeout(() => newNotification.remove(), 3000);
  }