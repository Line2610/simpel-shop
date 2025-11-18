import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/listview/ProductList";
import { Suspense } from "react";

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;

  return (
    <div>
      <Header />
      <CategoryList />
      <Suspense
        fallback={<div className="py-8 text-center">Loading products...</div>}
      >
        <h1 className="mt-15 mb-15 text-center text-4xl font-medium">
          Products
        </h1>
        <ProductList category={params?.category} />
      </Suspense>
    </div>
  );
}
