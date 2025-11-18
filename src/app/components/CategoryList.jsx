import CategoryElement from "./CategoryElement";
import { Suspense } from "react";

export default async function CategoryList() {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();

  return (
    <div className="sticky top-0 z-40 bg-white">
      <div className="mt-4 flex items-center justify-between space-x-3 overflow-x-auto px-4 pb-2">
        <CategoryElement
          category="Categories"
          isDropdown={true}
          options={categories}
        />
      </div>
    </div>
  );
}
