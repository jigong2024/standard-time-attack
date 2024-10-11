import axios from "axios";

export const postTodo = (todo) => {
  const response = axios.post("http://localhost:4000/todos", todo);
  return response.data;
};

export const deleteTodo = (id) => {
  const response = axios.delete(`http://localhost:4000/todos/${id}`);
  return response.data;
};

export const getTodo = () => {
  const response = axios.get("http://localhost:4000/todos");
  return response.data;
};
