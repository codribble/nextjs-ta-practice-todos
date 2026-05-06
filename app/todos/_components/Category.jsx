"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "@/app/api/todos";
import { TODO_CATEGORY } from "@/app/utils/todo";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="shrink-0">
      <Link href={`/todos`}>전체</Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/todos?category=${TODO_CATEGORY[category.id]}`}
          className="block"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Category;
