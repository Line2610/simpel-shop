import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default async function Home({ searchParams }) {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-8 text-center font-mono text-8xl font-bold">
          Simple Shop
        </h1>
        <Link href="/products">
          <button className="cursor-pointer flex-row rounded-full bg-pink-200 p-4 text-2xl text-gray-700 hover:scale-105 hover:transform">
            Se produkter
          </button>
        </Link>
      </div>
    </div>
  );
}
