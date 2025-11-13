import Image from "next/image";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";
import ProductList from "./components/listview/ProductList";
import Header from "./components/Header";


export default function Home() {
  return (
    <div>
 <Header />
 <CategoryList />
 <Suspense >
  <ProductListContainer />
 </Suspense>
 </div>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  return <List category={category} />;
}