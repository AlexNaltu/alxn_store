"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Category } from "@prisma/client";

type Product = {
  name: string;
  description: string;
  price: number;
  image_url: string;
  isInStock: boolean;
  quantity: number;
  category: Category;
};

export default function CreatePost() {
  const router = useRouter();
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    image_url: "",
    isInStock: false,
    quantity: 0,
    category: Category.Sushi,
  });

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setProduct({
        name: " ",
        description: " ",
        price: 0,
        image_url: " ",
        isInStock: false,
        quantity: 0,
        category: Category.Sushi,
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate(product);
      }}
      className="mx-auto mt-4 max-w-sm rounded bg-white p-4 shadow-md"
    >
      <Label>Name</Label>
      <Input
        type="text"
        placeholder="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <Label>Description</Label>
      <Input
        type="text"
        placeholder="Description"
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <Label>Image</Label>
      <Input
        type="text"
        placeholder="Image"
        value={product.image_url}
        onChange={(e) => setProduct({ ...product, image_url: e.target.value })}
      />
      <Label>Price</Label>
      <Input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) =>
          setProduct({ ...product, price: parseInt(e.target.value) })
        }
      />
      <Label>Quantity</Label>
      <Input
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={(e) =>
          setProduct({ ...product, quantity: parseInt(e.target.value) })
        }
      />
      <div className="my-2 flex items-center gap-2">
        <Label>Availible</Label>
        <Checkbox
          onCheckedChange={() => setProduct({ ...product, isInStock: true })}
        />
      </div>
      <div className="flex items-center gap-4">
        <Label>Category</Label>

        <select
          value={product.category}
          onChange={(e) =>
            setProduct({ ...product, category: e.target.value as Category })
          }
        >
          {Object.values(Category).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Button
        type="submit"
        disabled={createPost.isPending}
        className="my-2 w-full"
      >
        {createPost.isPending ? "Creating..." : "Submit"}
      </Button>
    </form>
  );
}
