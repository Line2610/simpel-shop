"use client";
import useCartStore from "./CartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartPanel() {
  const { items, isOpen, removeItem, closePanel } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-96 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold">Din kurv</h2>
            <button
              onClick={closePanel}
              className="cursor-pointer text-3xl font-bold text-gray-700"
            >
              &times;
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <p className="mt-8 text-center text-gray-500">Kurven er tom</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 border-b pb-4">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                      <p className="mt-1">{item.price},-</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer self-start"
                      aria-label={`Fjern ${item.title}`}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <div className="mb-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>{total.toFixed(2)},-</span>
              </div>
              <Link href="/payment">
                <button className="w-full cursor-pointer rounded-lg bg-pink-300 py-3 text-white transition-colors">
                  Gå til betaling
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
