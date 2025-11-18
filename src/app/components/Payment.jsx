"use client";
import useCartStore from "./kurv/CartStore";
import Image from "next/image";

const Payment = () => {
  const { items, removeItem } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handlePurchase = () => {
    alert("Thank you for your purchase!");
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <p className="mt-8 text-center text-gray-500">Cart is empty</p>
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
                  className="cursor-pointer self-start text-2xl"
                  aria-label={`Remove ${item.title}`}
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
        <div className="mt-8 border-t pt-4">
          <div className="mb-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>{total.toFixed(2)},-</span>
          </div>
          <button
            onClick={handlePurchase}
            className="w-full cursor-pointer rounded-lg bg-pink-300 py-3 text-white transition-colors hover:bg-pink-400"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
