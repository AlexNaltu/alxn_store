import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { Button } from "~/components/ui/button";
import Wrapper from "~/components/wrapper/wrapper";
import { formatCurrency } from "~/lib/formatters";
import { db } from "~/server/db";

// Product page with product details
const ProductId = async ({ params }: { params: { id: string } }) => {
  const product = await db.post.findFirst({ where: { id: params.id } });
  return (
    <Wrapper className="lg:max-w-5xl">
      <div className="flex flex-col items-center gap-2 tracking-tighter sm:my-10 sm:flex-row sm:items-center sm:gap-5">
        <Image
          src={product?.image_url || "/"}
          alt={"/"}
          width={3000}
          height={1000}
          className="max-w-[300px] object-cover object-center md:max-w-[500px]  md:px-6"
        />
        <div className="flex flex-col gap-2 xl:gap-6">
          <h1 className="font-black uppercase sm:text-lg lg:text-2xl xl:text-3xl">
            {product?.name}
          </h1>
          <p className="font-medium lg:text-lg">{product?.description}</p>
          <div className="my-2 flex items-center gap-2 sm:my-4 ">
            <p>
              Price:{" "}
              {product && product.price ? formatCurrency(product.price) : "N/A"}
            </p>
            <div>
              {product?.isInStock === true ? (
                <p className="flex items-center gap-1">
                  In Stock{" "}
                  <FaCircle size={10} className="mt-1 text-green-500" />
                </p>
              ) : (
                <p className="flex items-center gap-1">
                  In Stock <FaCircle size={10} className="mt-1 text-red-500" />
                </p>
              )}
            </div>
          </div>
          <Button>Add To Cart</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductId;
