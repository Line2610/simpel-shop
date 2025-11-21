"use client";

import { useActionState } from "react";
import { SubmitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(SubmitProduct, { error: {} });
  console.log(state);
  return (
    <div className="flex h-lvh items-center justify-center">
      {state.succes && (
        <p className="text-green-400">tillykke din formular er sendt...</p>
      )}

      <form action={postProduct}>
        {state.error?.productName && (
          <p className="text-red-500">{state.error.productName}</p>
        )}
      </form>
      <input
        placeholder="Enter a number"
        className="border border-gray-800 px-2 py-1"
      ></input>
    </div>
  );
};

export default addProduct;
