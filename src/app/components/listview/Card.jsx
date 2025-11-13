import { Suspense } from "react";
import CategoryList from "../CategoryList";

const Card = () => {
  return (
    <div>
      <CategoryList />
      <Suspense>
        <ProductList category={category} />
      </Suspense>
    </div>
  );
};

export default Card;
