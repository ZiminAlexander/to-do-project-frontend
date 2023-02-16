export function talkWithServer(method, fetchObject) {
  const urlOfSite = "http://nkbelousov.site:3000/todos";
  let urlForFetch = urlOfSite;

  switch (method) {
    case "LOAD": {
      urlForFetch += "/";
      break;
    }
    case "SEARCH": {
      const searchFilter = document.querySelector(".search-area").value;
      urlForFetch += "?search=" + searchFilter;
      break;
    }
    case "DELETE": {
      const deleteId = fetchObject.id;
      urlForFetch += `/${deleteId}`;
      fetchObject.method = method;
      break;
    }
    case "PUT": {
      urlForFetch += `/${fetchObject.id}`;
      fetchObject.method = method;
      break;
    }
    case "POST": {
      urlForFetch += "/";
      fetchObject.method = method;
      break;
    }
    default: {
      throw new Error("Неверный метод запроса на сервер");
    }
  }

  return fetch(urlForFetch, fetchObject);
}
