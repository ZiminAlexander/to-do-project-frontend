import "./notifications.css";
import { createNewElement } from "Project/helpers/createNewElement";

//Функция для отображения нотификаций
export function showNotification(textOfNotification, position, someCallback) {
  const newNotification = createNewElement("div", [
    "notification",
    "panel",
    "confirm",
  ]);
  const newTextOfNotification = createNewElement("div", "text-of-notification");
  const newCloseNotificationButton = createNewElement("button", [
    "small-button",
    "red-button",
    "close-notification-button",
  ]);
  newTextOfNotification.textContent = textOfNotification;
  newCloseNotificationButton.textContent = "×";

  if (position === "right-bottom") {
    newCloseNotificationButton.addEventListener(
      "click",
      function notificationCallback() {
        newNotification.remove();
      }
    );
    newNotification.append(newTextOfNotification);
    newNotification.append(newCloseNotificationButton);
    document.body.append(newNotification);

    setTimeout(() => newNotification.remove(), 3000);
  } else if (position === "center-confirm") {
    const notificationWindow = createNewElement("div", "notification-window");
    const answerDiv = createNewElement("div", "answer-box");
    const yesButton = createNewElement("button", [
      "big-button",
      "answer-button",
    ]);
    const noButton = createNewElement("button", [
      "big-button",
      "answer-button",
    ]);
    newNotification.classList.add("answer-position");
    yesButton.textContent = "Да";
    noButton.textContent = "Нет";
    yesButton.addEventListener("click", function yesButtonCallback() {
      notificationWindow.remove();
      someCallback();
      return;
    });
    noButton.addEventListener("click", function noButtonCallback() {
      notificationWindow.remove();
      return;
    });
    newCloseNotificationButton.addEventListener(
      "click",
      function notificationCallback() {
        notificationWindow.remove();
      }
    );
    answerDiv.append(yesButton);
    answerDiv.append(noButton);
    newNotification.append(newTextOfNotification);
    newNotification.append(answerDiv);
    newNotification.append(newCloseNotificationButton);
    notificationWindow.append(newNotification);
    document.getElementById("root").append(notificationWindow);
  } else if (position === "center") {
    const notificationWindow = createNewElement("div", ["notification-window", "no-opacity-window"]);
    newNotification.classList.add("center");
    newNotification.append(newTextOfNotification);
    notificationWindow.append(newNotification); 
    document.getElementById("root").append(notificationWindow);
  }
}
