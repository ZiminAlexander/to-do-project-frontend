import { createNewElement } from "./createNewElement";
import "./loading-window.css";

export function createLoadingWindow(switcher) {
  try {
    const taskTable = document.querySelector(".task-table");

    if (switcher === "on") {
      const loadingWindow = createNewElement("div", "loading-window");
      const loadingMessage = createNewElement("div", "loading-message");
      loadingMessage.innerHTML = "Задачи обновляются, подождите, пожалуйста";
      loadingWindow.append(loadingMessage);
      taskTable.append(loadingWindow);
      taskTable.classList.add("loading");
    } else if (switcher === "off") {
      const loadingWindow = document.querySelector(".loading-window");
      loadingWindow.remove();
      taskTable.classList.remove("loading");
    } else {
      throw new Error("Неправильный аргумент в функции createLoadingWindow ");
    }
  } catch (e) {
    console.error(e);
  }
}
