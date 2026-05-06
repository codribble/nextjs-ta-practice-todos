import { TODO_CATEGORY } from "@/app/utils/todo";
import Link from "next/link";

const COMPLETED_COLOR = {
  true: "text-green-500",
  false: "text-red-500",
};

const TodoItem = ({ todo, categories }) => {
  const category = categories.find((c) => c.id === todo.category);
  const categoryToName = TODO_CATEGORY[category.id];

  //   console.log(todo);
  //   console.log(categoryToName);

  return (
    <Link
      href={`/todos/${todo.id}`}
      className="flex flex-col justify-between px-5 py-3 border rounded"
    >
      <p className="flex gap-1 text-2xl">
        <span className="shrink-0">[{category.name}]</span>
        {todo.title}
      </p>
      <p className={`text-right ${COMPLETED_COLOR[todo.completed]}`}>
        {todo.completed ? "완료" : "진행"}
      </p>
    </Link>
  );
};

export default TodoItem;
