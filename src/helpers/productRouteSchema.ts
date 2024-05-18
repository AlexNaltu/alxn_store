import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().int().min(1),
  image_url: z.string().min(1),
  isInStock: z.boolean(),
  quantity: z.number(),
  category: z.enum(["Sushi", "Ramen", "Snacks", "Sauces", "Fresh"]),
});
