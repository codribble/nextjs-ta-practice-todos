"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getTodo } from "@/app/api/todos";
import Headline from "@/app/components/Headline";

const ClientPage = () => {
  const { id } = useParams(); // 클라이언트에서 params 받는 방법 useParams();
  const [todo, setTodo] = useState([]);

  //   console.log(id);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodo(id);

      setTodo(data);
    };

    fetchTodo();
  }, [id]);

  return (
    <div className="grow">
      <Headline title={todo.title} />
    </div>
  );
};

export default ClientPage;
