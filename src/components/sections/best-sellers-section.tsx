import React from "react";
import { api } from "~/trpc/server";
import ProductsCard from "../products/products-card";
import Wrapper from "../wrapper/wrapper";

const BestSellersSection = async () => {
  const products = await api.post.getBestSellers();
  return (
    <>
      <div className="my-10 xl:my-20">
        <h1 className="mb-10  text-2xl font-black uppercase lg:text-4xl">
          Best Sellers
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductsCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellersSection;
