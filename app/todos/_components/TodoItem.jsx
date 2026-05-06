import Link from "next/link";

const COMPLETED_COLOR = {
  true: "text-green-500",
  false: "text-red-500",
};

const TodoItem = ({ todo, categories, onClick }) => {
  const category = categories.find((c) => c.id === todo.category);

  //   console.log(todo);

  return (
    <div className="flex flex-col justify-between px-5 py-3 border rounded">
      <div className="flex items-start gap-2">
        <button className="shrink-0" onClick={() => onClick(category.id)}>
          [{category.name}]
        </button>
        <Link href={`/todos/${todo.id}`} className="text-2xl">
          {todo.title}
        </Link>
      </div>
      <p className={`text-right ${COMPLETED_COLOR[todo.completed]}`}>
        {todo.completed ? "완료" : "진행"}
      </p>
    </div>
  );
};

export default TodoItem;
