"use client";

import { useEffect, useState } from "react";
import { getCategories, getTodos } from "../api/todos";
import TodoItem from "./_components/TodoItem";
import { useSearchParams } from "next/navigation";
import { TODO_CATEGORY } from "../utils/todo";

const ClientPage = () => {
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);

  // 필터링
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  //   console.log(category);

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

  const filteredTodos = category
    ? todos.filter((t) => TODO_CATEGORY[t.category] === category)
    : todos;

  return (
    <div className="grow grid grid-cols-4 gap-4">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} categories={categories} />
      ))}
    </div>
  );
};

export default ClientPage;
