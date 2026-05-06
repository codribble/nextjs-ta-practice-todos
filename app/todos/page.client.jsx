"use client";

import { useEffect, useState } from "react";
import { getCategories, getTodos } from "../api/todos";
import TodoItem from "./_components/TodoItem";

const ClientPage = () => {
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();

      setTodos(data);
    };

    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetchTodos();
    fetchCategories();
  }, []);

  //   console.log(todos);

  const handleClick = (id) => {
    const filteredTodos = [...todos].filter((todo) => todo.category === id);

    setTodos(filteredTodos);
  };

  return (
    <div className="grow grid grid-cols-4 gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          categories={categories}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default ClientPage;
