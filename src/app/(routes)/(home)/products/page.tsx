import { Category } from "@prisma/client";
import React from "react";
import { string } from "zod";
import Searchbar from "~/components/searchbar/search-input";
import { ProductsGrid } from "~/components/products/products-grid";
import Wrapper from "~/components/wrapper/wrapper";
import { db } from "~/server/db";
import Categories from "~/components/category/categories";

// Page props with params and searchParams
export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Products page with search bar and products grid
const ProductsPage = async (props: PageProps) => {
  const totalProducts = await db.post.count();
  return (
    <>
      <Wrapper>
        <Searchbar />
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 self-start">
            <h1 className="mt-10 text-3xl font-bold">
              Total Products: {totalProducts}
            </h1>

            <Categories />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProductsPage;
