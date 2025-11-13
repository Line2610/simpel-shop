import Link from "next/link";

const Header = () => {
  return (
    <Link href="/ProductList">
      <div className="position-sticky top-0 m-2 flex justify-center gap-10 bg-stone-400/70 p-5">
        <p className="cursor-pointer text-s text-white">Home</p>
        <p className="cursor-pointer text-s text-white">Products</p>
      </div>
    </Link>
  );
};

export default Header;
