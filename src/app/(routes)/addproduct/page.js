// import { useActionState } from "react";
// import { SubmitProduct } from "@/app/action/action";
import ProductFrom from "@/app/components/ProductForm";

const addProduct = () => {
  // const [state, postProduct] = useActionState(SubmitProduct, {
  //   succes: null,
  //   error: {},
  //   fields: {},
  // });

  return (
    <div className="flex h-lvh items-center justify-center">
      {/* {state.succes === true && (
        <p className="text-green-400">tillykke din formular er sendt...</p>
      )}

      {state.succes === false && (
        <p className="text-red-500">der skete en fejl, prøv igen...</p>
      )} */}

      <ProductFrom />
      {/* <form action={postProduct}>
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

        <button
          type="submit"
          className="cursor-pointer border border-gray-800 bg-indigo-300 px-2 py-1 text-white"
        >
          Add product
        </button>
      </form> */}
    </div>
  );
};

export default addProduct;
