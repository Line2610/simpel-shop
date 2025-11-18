"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CategoryElement = ({ category, isDropdown = false, options = [] }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (isDropdown) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm hover:border-gray-400"
        >
          <span className="font-medium">{category}</span>
          <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full z-50 mt-1 max-h-60 max-w-[200px] overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-lg">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  router.push(`/products?category=${option}`);
                  setIsOpen(false);
                }}
                className="block w-full cursor-pointer border-b border-gray-100 px-4 py-3 text-left text-sm text-gray-800 last:border-b-0 hover:bg-pink-100"
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
      onClick={() => router.push(`/products?category=${category}`)}
      className="cursor-pointer rounded-lg border border-gray-300 bg-white px-2 py-1 whitespace-nowrap"
    >
      <span className="font-medium">{category}</span>
    </button>
  );
};

export default CategoryElement;
