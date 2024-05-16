"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image_url, setImageUrl] = useState("");
  const [isInStock, setIsInStock] = useState(false);

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setDescription("");
      setPrice(0);
      setImageUrl("");
      setIsInStock(false);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name, description, price, image_url, isInStock });
      }}
      className="post_form mx-auto my-10 flex max-w-md flex-col gap-4 rounded-lg border-2 border-black p-5"
    >
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description</label>

      <input
        type="text"
        placeholder="Description"
        value={description}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Price</label>

      <input
        type="number"
        placeholder="Price"
        value={price}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <label>Image</label>

      <input
        type="text"
        placeholder=" Image Url"
        value={image_url}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <div className="flex items-center justify-between">
        <label>Is in stock?</label>
        <Checkbox onCheckedChange={() => setIsInStock(true)} />
      </div>
      <Button
        type="submit"
        className="rounded-full"
        disabled={createPost.isPending}
      >
        {createPost.isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
