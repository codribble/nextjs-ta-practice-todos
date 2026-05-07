import { notFound } from "next/navigation";
import { getTodo } from "@/app/api/todos";
import ClientPage from "./page.client";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const todo = await getTodo(id);

  return {
    title: todo.title,
    description: todo.content,
  };
};

const TodoDetail = async ({ params }) => {
  const { id } = await params;
  const todo = await getTodo(id);

  // console.log(todo);

  if (!todo.id) notFound();

  return <ClientPage />;
};

export default TodoDetail;
