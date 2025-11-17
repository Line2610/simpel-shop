import CategoryElement from "./CategoryElement";

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

        <div className="shrink-0">
          <form className="max-w-md">
            <label
              htmlFor="search"
              className="sr-only mb-2.5 block text-sm font-medium"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block h-12 w-full rounded-lg border border-gray-300 bg-white pr-4 pl-10 text-sm placeholder:text-gray-500 hover:border-gray-400"
                placeholder="Search products..."
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// const CategoryList = () => {
//   return (
//     <Suspense fallback={<div>Loading categories...</div>}>
//       <FetchCategories />
//     </Suspense>
//   );
// };

// const FetchCategories = async () => {
//   const response = await fetch("https://dummyjson.com/products/category-list");
//   const categories = await response.json();

//   return (
//     <div className="flex space-x-3 overflow-x-auto px-4 pb-2">
//       <CategoryElement category="All" key="all" />
//       {categories.map((category, index) => (
//         <CategoryElement category={category} key={index} />
//       ))}
//     </div>
//   );
// };

// export default CategoryList;
