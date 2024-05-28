"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { api } from "~/trpc/server";
import Wrapper from "../wrapper/wrapper";
import { Category, Post } from "@prisma/client";
import { trpc } from "~/app/_trpc/client";

export default function Categories() {
  // Categories array
  const categories: Category[] = [
    "Sushi",
    "Ramen",
    "Snacks",
    "Sauces",
    "Fresh",
  ];
  // Selected category state
  const [selectedCategory, setSelectedCategory] = useState<Category | "">();
  // use Query to get the products
  const { data: products, refetch } = trpc.post.getCategoriesById.useQuery(
    { category: selectedCategory },
    { enabled: false },
  );

  // Handle category change function to set the selected category and refetch the data
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as Category | "";
    setSelectedCategory(selected);
  };

  return (
    <>
      <Wrapper>
        <div>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <div>
            {products?.map((product) => (
              <div key={product.id}>
                <h1>{product.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
