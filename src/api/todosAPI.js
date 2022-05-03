import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: [],
});

export const todosAPI = {
  getTodos() {
    return instance.get("todos").then((res) => res.data);
  },
};
