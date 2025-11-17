import Link from "next/link";

const Header = () => {
  return (
    <div className="position-sticky top-0 m-2 flex justify-center gap-10 bg-stone-400/70 p-5">
      <Link href="/">
        <p className="text-s cursor-pointer text-white">Home</p>
      </Link>

      <Link href="/products">
        <p className="text-s cursor-pointer text-white">Products</p>
      </Link>
    </div>
  );
};

export default Header;
