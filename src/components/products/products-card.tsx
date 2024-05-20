import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatCurrency } from "~/lib/formatters";
import { FaCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

const ProductsCard = ({
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
    <>
      <Card className=" flex max-w-[300px]  flex-col items-center justify-between">
        <Link href={`/products/${id}`}>
          <CardHeader>
            <Image
              src={image_url}
              alt={name}
              width={300}
              height={300}
              className="aspect-square cursor-pointer object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="line-clamp-1">{name}</CardTitle>
            <CardDescription className="my-2 line-clamp-1 ">
              {description}
            </CardDescription>
            <CardFooter className="flex flex-col gap-1">
              <p className="font-semibold">Price: {formatCurrency(price)}</p>
              <div>
                {isInStock === true ? (
                  <p className="flex items-center gap-1">
                    In Stock{" "}
                    <FaCircle size={10} className="mt-1 text-green-500" />
                  </p>
                ) : (
                  <p className="flex items-center gap-1">
                    In Stock{" "}
                    <FaCircle size={10} className="mt-1 text-red-500" />
                  </p>
                )}
              </div>
            </CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default ProductsCard;
