export function talkWithServer(method, currentTask){
    const urlOfSite = 'http://nkbelousov.site:3000/todos';
    const fetchObject = {headers: {'Content-Type': 'application/json'}};

    let urlForFetch = urlOfSite;

    switch(method) {
        case 'LOAD':
            urlForFetch += '/';
            break;
      
        case 'SEARCH':
            const searchFilter = document.querySelector(".search-area").value;
            urlForFetch += '?search=' + searchFilter;
            break;

        case 'DELETE':
            const deleteId = currentTask.id;
            urlForFetch += `/${deleteId}`;
            fetchObject.method = method;            
            break;

        case 'PUT':
            const id = currentTask.id;
            const submitTaskObject = {};
            let submitString = "";
            const taskDescription = currentTask.dataset.description;
            urlForFetch += `/${id}`;
            submitTaskObject.title = currentTask.querySelector(".text").textContent;
            submitTaskObject.isCompleted = currentTask.querySelector(".is-completed").checked;
            submitTaskObject.description = taskDescription;
            submitString = JSON.stringify(submitTaskObject);
            fetchObject.method = method;
            fetchObject.body = submitString;
            break;
      
        default:
            alert("Неверный метод запроса на сервер");
            break;
    }

    return fetch(urlForFetch, fetchObject);
}