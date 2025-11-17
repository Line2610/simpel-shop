// "use client";
// import { useRouter } from "next/navigation";

// const CategoryElement = ({ category }) => {
//   const router = useRouter();
//   return (
//     <div
//       onClick={() => router.push(`?category=${category}`)}
//       className="cursor-pointer rounded-lg bg-stone-600 "
//     >
//       {category}
//     </div>
//   );
// };

// export default CategoryElement;

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CategoryElement = ({ category, isDropdown = false, options = [] }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Debug log
  console.log("Dropdown open:", isOpen, "Options:", options);

  if (isDropdown) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm hover:border-gray-400"
        >
          <span className="font-medium">{category}</span>
          <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="absoulte top-full left-0 z-50 mt-1 max-h-60 max-w-[200px] overflow-y-auto rounded-lg border border-gray-300 text-gray-800">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  router.push(`?category=${option}`);
                  setIsOpen(false);
                }}
                className="block w-full cursor-pointer px-4 py-3 text-left text-sm hover:bg-pink-100"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="cursor-pointer rounded-lg border border-gray-300 bg-white px-2 py-1 whitespace-nowrap"
    >
      <span className="font-medium">{category}</span>
    </button>
  );
};

export default CategoryElement;
