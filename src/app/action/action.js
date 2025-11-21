"use server";

export const SubmitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productName");

  const state = {
    succes: null,
    error: {},
    fields: {
      productName,
    },
  };

  if (!productName) {
    error.productName = "feltet skal udfyldes";
  } else if (productName.length < 5) {
    error.productName = "feltet skal indeholde mindst 5 tegn";
  }

  if (Object.keys(error).length > 0) {
    return {
      succes: false,
      error: error,
      fields: { productName },
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: productName,
    }),
  });
  console.log(response);

  state.succes = response.ok;
  return state;
};
