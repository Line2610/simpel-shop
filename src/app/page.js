import Image from "next/image";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";
import ProductList from "./components/listview/ProductList";
import Header from "./components/Header";

export default async function Home({ searchParams }) {
  const { category } = await searchParams;
  return (
    <div>
      <Header />
      <CategoryList />
      <Suspense>
        <ProductList category={category} />
      </Suspense>
    </div>
  );
}
