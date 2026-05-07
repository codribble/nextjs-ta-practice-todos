"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCategories, getTodos } from "../api/todos";
import { TODO_CATEGORY } from "../utils/todo";
import TodoItem from "./_components/TodoItem";
import Headline from "../components/Headline";
import Link from "next/link";
// import Loading from "../components/Loading";

const ClientPage = () => {
  // const [loading, setLoading] = useState(true);
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
    // setLoading(false);
  }, []);

  //   console.log(todos);

  const filteredTodos = category
    ? todos.filter((t) => TODO_CATEGORY[t.category] === category)
    : todos;

  const selectedCategory =
    categories.find((c) => TODO_CATEGORY[c.id] === category) || "";

  // console.log(selectedCategory);

  return (
    <div className="grow">
      <Headline title={`${selectedCategory.name || "전체"} 할 일 목록`} />

      <div className="flex justify-end mb-5">
        <Link
          href={`/todos/new`}
          className="min-w-[80px] p-2 bg-cyan-500 rounded text-white text-center hover:bg-cyan-600"
        >
          추가
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} categories={categories} />
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
