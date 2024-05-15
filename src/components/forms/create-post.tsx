"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";


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
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="name"
        value={name}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="price"
        value={price}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder=" image_url"
        value={image_url}
        className="w-full rounded-full px-4 py-2 text-black"
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        placeholder="Is in stock"
        type="checkbox"
        checked={isInStock}
        onChange={() => {
          setIsInStock(true);
        }}
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isPending}
      >
        {createPost.isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
