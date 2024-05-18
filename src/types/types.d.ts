import { Category, Post } from "@prisma/client";

export interface FullProduct extends Post {
  category: Category;
}

export interface FullProductClient
  extends Omit<FullProduct, "createdAt" | "updatedAt"> {
  createdAt: string;
  updatedAt?: string | null;
}
