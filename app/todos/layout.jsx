import Category from "./_components/Category";

const TodosLayout = ({ children }) => {
  return (
    <div className="flex gap-5 p-8">
      <Category />
      {children}
    </div>
  );
};

export default TodosLayout;
