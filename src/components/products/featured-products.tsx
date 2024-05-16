import React from "react";
import { api } from "~/trpc/server";
import ProductsCard from "./products-card";
import Wrapper from "../wrapper/wrapper";

const FeaturedProducts = async () => {
  const products = await api.post.getLatest();
  return (
    <Wrapper className="my-5 flex flex-col justify-center gap-4 sm:my-10 lg:my-14 lg:gap-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductsCard key={product.id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
