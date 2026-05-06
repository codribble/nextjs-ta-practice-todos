export const getTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  const data = await res.json();

  return data;
};

export const getTodo = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`);
  const data = await res.json();

  return data;
};

export const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const data = await res.json();

  return data;
};
