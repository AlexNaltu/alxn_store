import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatCurrency } from "~/lib/formatters";

const SearchResults = ({
  name,
  description,
  price,
  image_url,
  isInStock,
  quantity,
  category,
  id,
}: Post) => {
  return (
    <Link
      href={`/products/${id}`}
      className="flex items-center gap-4 border-b-2 bg-white p-2 py-3 transition-all duration-300 ease-linear hover:bg-gray-300 xl:py-4 "
    >
      <Image src={image_url} alt={name} width={80} height={50} />
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="line-clamp-1 font-bold">{name}</h3>
          <p className="line-clamp-1">{description}</p>
        </div>
        <div className="flex justify-between ">
          <p>{formatCurrency(price)} </p>
          <p className="w-32 rounded-md bg-black text-center text-white">
            {isInStock ? <span>In Stock</span> : <span>Out of Stock</span>}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResults;
