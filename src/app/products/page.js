import ProductList from "../components/listview/ProductList";
import Header from "../components/Header";

import CategoryList from "../components/CategoryList";

export default async function ProductsPage({ searchParams }) {
  return (
    <div>
      <Header />
      <CategoryList />
      <h1 className="mt-15 mb-15 text-center text-4xl font-medium">Products</h1>
      <ProductList />
    </div>
  );
}
