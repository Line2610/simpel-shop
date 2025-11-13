import Link from "next/link";
import Image from "next/image";
import FavoritElement from "../FavoriteElements";

export default async function ProductList({ category }) {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <FavoritElement id={product.id} />
          <Link href={`/detalje/${product.id}`}>
            <Image
              loading="eager"
              alt={product.brand ? product.brand : "Product Image"}
              src={product.thumbnail}
              width={300}
              height={200}
            />
            <div className="text-center">{product.brand}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
