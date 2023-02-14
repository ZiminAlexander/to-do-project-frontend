//Создает новый HTML элемент
export function createNewElement(tag, classes) {
  let newElement = document.createElement(tag);
  if (Array.isArray(classes)) {
    for (let i = 0; i < classes.length; i++) {
      newElement.classList.add(classes[i]);
    }
  } else {
    newElement.classList.add(classes);
  }
  return newElement;
}
