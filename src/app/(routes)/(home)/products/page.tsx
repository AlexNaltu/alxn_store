import { Category } from "@prisma/client";
import React from "react";
import { string } from "zod";
import { ProductsGrid } from "~/components/products/products-grid";
import Wrapper from "~/components/wrapper/wrapper";
import { db } from "~/server/db";
import { api } from "~/trpc/server";

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const ProductsPage = async (props: PageProps) => {
  const totalProducts = await db.post.count();
  return (
    <>
      <Wrapper>
        <div>
          <div className="flex flex-col gap-2">
            <h1 className="mt-10 text-3xl font-bold">
              Total Products: {totalProducts}
            </h1>
            <div className="flex gap-2">
              <h1>Categories:</h1>
              {Object.values(Category).map((value) => (
                <div key={value} className="">
                  <h1>{value}</h1>
                </div>
              ))}
            </div>
          </div>
          <ProductsGrid {...props} />
        </div>
      </Wrapper>
    </>
  );
};

export default ProductsPage;
