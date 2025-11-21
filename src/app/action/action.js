"use server";

export const SubmitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const productPrice = formData.get("productprice");

  if (!productName) {
    error.productName = "feltet skal udfyldes";
  } else if (productName.length < 5) {
    error.productName = "feltet akl indeholde mindst 5 tegn";
  }

  if (!productPrice) {
    error.productPrice = "feltet skal udfyldes";
  } else if (isNaN(Number(productPrice))) {
    error.productPrice = "indtast en gyldig pris";
  }
};
