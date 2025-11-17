import Header from "@/app/components/Header";
import { Suspense } from "react";
import Image from "next/image";

export default async function DetaljePage({ params }) {
  return (
    <div>
      <Header />
      <Suspense>
        <FetchProduct params={params} />
      </Suspense>
    </div>
  );
}

async function FetchProduct({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 overflow-hidden rounded-lg bg-white">
          <div className="flex items-center justify-center bg-gray-100 p-8">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={400}
              className="h-auto max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-start p-8">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <p className="mb-6 leading-relaxed text-gray-700">
              {product.description}
            </p>

            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">
                Price: ${product.price}
              </span>
            </div>

            {product.rating && (
              <div className="mb-4 flex items-center">
                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(product.rating))}
                </span>
                <span className="text-gray-300">
                  {"★".repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="ml-2 font-semibold">{product.rating}/5</span>
              </div>
            )}

            {product.category && (
              <div className="mb-4">
                <span className="text-sm text-gray-500 capitalize">
                  Category: {product.category}
                </span>
              </div>
            )}

            <button className="mt-6 rounded-lg bg-pink-200 px-6 py-3 font-medium text-gray-800 transition-colors hover:bg-pink-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
