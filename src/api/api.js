import axios from "axios";

const axiosObject = axios.create({
    baseURL: process.env.START_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

const api = {};
api.tasks = {};
api.users = {};

api.tasks.load = () => {
    return axiosObject.get("todos");
  };

api.tasks.search = (searchFilter) => {
  return axiosObject.get("todos", { params: { search: searchFilter } });
};

api.tasks.remove = (id) => {
    return axiosObject.delete("todos" + id);
};

api.tasks.update = (taskData) => {
    return axiosObject.put("todos/" + taskData.id, taskData.data);
};

api.tasks.submit = (taskData) => {
    return axiosObject.post("todos", taskData.data);
};

api.users.login = (login, currentPassword) => {
    const loginObject = {
        name: login, 
        password: currentPassword
    }
    return axiosObject.post("users/login/", loginObject);
};

api.users.isLogged = () => {
    return axiosObject.get("users/self/");
};


export {api};