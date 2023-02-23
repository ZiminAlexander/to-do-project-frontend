import axios from "axios";

const api = axios.create({
    baseURL: process.env.START_URL,
    headers: { "Content-Type": "application/json" },
});

api.load = function(){
    return this.get();
  };

api.search = function(searchFilter){
  return this.get("?search=" + searchFilter);
};

api.remove = function(deleteID){
    return this.delete(deleteID);
};

api.update = function(fetchObject){
    return this.put(fetchObject.id, fetchObject.body);
};

api.submit = function(fetchObject){;
    return this.post("",fetchObject.body);
};

export {api};