"use client";

import { useActionState } from "react";
import { SubmitProduct } from "@/app/action/action";
import { useFormStatus } from "react-dom";

const ResponseMessage = ({ state }) => {
  return (
    <>
      {state.succes === true && (
        <p className="text-green-400">tillykke din formular er sendt...</p>
      )}

      {state.succes === false && (
        <p className="text-red-500">der skete en fejl, prøv igen...</p>
      )}
    </>
  );
};
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`border border-gray-800 bg-indigo-300 px-2 py-1 text-white ${pending ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={pending}
    >
      {pending ? "Submitting..." : "Add product"}
    </button>
  );
};

const ProductForm = () => {
  const [state, postProduct] = useActionState(SubmitProduct, {
    succes: null,
    error: {},
    fields: {},
  });
  return (
    <>
      <ResponseMessage state={state} />
      <form action={postProduct}>
        {state.error?.productName && (
          <p className="text-red-500">{state.error.productName}</p>
        )}

        <input
          type="text"
          name="productName"
          placeholder="Enter product name"
          defaultValue={state.fields?.productName}
          className="mr-2 border border-gray-800 px-2 py-1"
        ></input>

        <SubmitButton />
      </form>
    </>
  );
};

export default ProductForm;
