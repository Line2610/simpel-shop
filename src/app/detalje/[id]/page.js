import Header from "@/app/components/Header";
import { Suspense } from "react";
import ProductDetails from "@/app/components/ProductDetails";

export default async function DetaljePage({ params }) {
  return (
    <div>
      <Header />
      <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
        <FetchProduct params={params} />
      </Suspense>
    </div>
  );
}

async function FetchProduct({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return <ProductDetails product={product} />;
}
