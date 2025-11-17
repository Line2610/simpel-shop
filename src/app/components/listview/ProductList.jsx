import Link from "next/link";
import Image from "next/image";
import FavoritElement from "../FavoriteElements";
import AddToCartButton from "../kurv/AddToCartButton";

export default async function ProductList({ category }) {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();

  return (
    <div className="mr-5 ml-5 grid grid-cols-4 justify-items-center">
      {products.map((product) => (
        <div key={product.id} className="w-full px-2">
          <div className="relative bg-stone-100">
            <FavoritElement
              id={product.id}
              className="absolute top-3 right-3 cursor-pointer rounded-full bg-stone-100 p-1 text-3xl text-pink-300"
            />

            <div className="absolute right-3 bottom-3 z-10">
              <AddToCartButton product={product} />
            </div>

            <Link href={`/detalje/${product.id}`}>
              <Image
                loading="eager"
                alt={product.brand ? product.brand : "Product Image"}
                src={product.thumbnail}
                width={300}
                height={200}
              />
            </Link>
          </div>

          <div className="mt-1 mb-6 flex flex-col">
            <p className="text-sm text-gray-400">{product.brand}</p>
            <p>{product.title}</p>
            <p className="mt-2">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
