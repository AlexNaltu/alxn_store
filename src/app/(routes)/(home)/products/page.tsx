import React from "react";
import { ProductsGrid } from "~/components/products/products-grid";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import Wrapper from "~/components/wrapper/wrapper";
import { db } from "~/server/db";
import { api } from "~/trpc/server";

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const ProductsPage = async (props: PageProps) => {
  const totalProducts = await db.post.count();
  const categories = await api.categories.getCategories();
  return (
    <>
      <Wrapper>
        <div>
          <div className="flex justify-between">
            <h1>Total Products: {totalProducts}</h1>
            <div>
              <h2>Filter By:</h2>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={`${category.name}`}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ProductsGrid {...props} />
        </div>
      </Wrapper>
    </>
  );
};

export default ProductsPage;
