import axios from "axios";

const axiosObject = axios.create({
    baseURL: process.env.START_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

const api = {};
api.tasks = {};

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

api.tasks.submit = function(taskData){;
    return axiosObject.post("todos", taskData.data);
};

export {api};