import Image from "next/image";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";
import ProductList from "./components/listview/ProductList";
import Header from "./components/Header";

export default async function Home({ searchParams }) {
  return (
    <div className="">
      <Header />
      <h1 className="flex min-h-screen items-center justify-center text-center text-8xl font-bold">
        Simple Shop
      </h1>
      <h1>Forside</h1>
    </div>
  );
}
