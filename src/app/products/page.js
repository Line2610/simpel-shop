// import ProductList from "../components/listview/ProductList";
// import Header from "../components/Header";

// import CategoryList from "../components/CategoryList";

// export default async function ProductsPage({ searchParams }) {
//   const category = searchParams?.category;
//   return (
//     <div>
//       <Header />
//       <CategoryList />
//       <h1 className="mt-15 mb-15 text-center text-4xl font-medium">Products</h1>
//       <ProductList searchParams={searchParams} />
//     </div>
//   );
// }

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
