"use client";

import { deleteTodo, getTodo, postTodo } from "@/api/todos";
import TodoList from "@/components/TodoList";
import { useEffect, useState } from "react";

function todosPage() {
  const [inputValue, setInputValue] = useState({
    title: "",
    comments: "",
  });

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = getTodo();
    setTodos(data);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      // id: Date.now().toString(),
      title: inputValue.title,
      comments: inputValue.comments,
      isDone: false,
    };

    try {
      await postTodo(newTodo);
      setTodos([...todos, newTodo]);
      setInputValue({ title: "", comments: "" });
    } catch (error) {
      console.error("투두추가 실패:", error);
    }
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div>
      <h1>My TodoList</h1>
      <div>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <p>제목</p>
          <input
            type="text"
            name="title"
            value={inputValue.title}
            onChange={handleInputChange}
            className="border"
          />
          <p>내용</p>
          <input
            type="text"
            name="comments"
            value={inputValue.body}
            onChange={handleInputChange}
            className="border"
          />
          <button type="submit" className="border">
            add
          </button>
        </form>
      </div>
      <div>
        {todos?.map((todo) => (
          <TodoList key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default todosPage;
