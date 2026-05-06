const TodosLayout = ({ children }) => {
  return (
    <div className="flex gap-5 p-8">
      <div className="shrink-0">Todo 공통 layout</div>
      {children}
    </div>
  );
};

export default TodosLayout;
