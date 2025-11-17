"use client";
import useCartStore from "./CartStore";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function AddToCartButton({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <MdOutlineShoppingBag
      onClick={() => addItem(product)}
      className="cursor-pointer text-2xl"
    >
      Læg i kurv
    </MdOutlineShoppingBag>
  );
}
