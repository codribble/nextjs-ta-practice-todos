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

const TodoDetail = () => {
  return <ClientPage />;
};

export default TodoDetail;
