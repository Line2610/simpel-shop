import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

export default async function CategoryList() {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();

  return (
    <div>
      {categories.map((category, index) => (
        <CategoryElement category={category} key={index} />
      ))}
    </div>
  );
}
