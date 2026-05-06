"use client";

import { useEffect, useState } from "react";
import { getTodo } from "@/app/api/todos";
import { useParams } from "next/navigation";

const ClientPage = () => {
  const { id } = useParams(); // 클라이언트에서 params 받는 방법 useParams();
  const [todo, setTodo] = useState([]);

  console.log(id);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodo(id);

      setTodo(data);
    };

    fetchTodo();
  }, [id]);

  console.log(todo);

  return <div>asf</div>;
};

export default ClientPage;
