import { Category, Post } from "@prisma/client";
import { z } from "zod";
import { createProductSchema } from "~/helpers/productRouteSchema";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

//post router
export const postRouter = createTRPCRouter({
  //create product procedure
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        price: z.coerce.number().int().min(1),
        image_url: z.string().min(1),
        isInStock: z.boolean(),
        quantity: z.coerce.number().int().min(1),
        category: z.enum(["Sushi", "Ramen", "Snacks", "Sauces", "Fresh"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          image_url: input.image_url,
          isInStock: input.isInStock,
          quantity: input.quantity,
          category: input.category,
        },
      });
    }),
  //update product procedure
  updateProduct: protectedProcedure
    .input(createProductSchema.extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...updatedData } = input;
      return ctx.db.post.update({
        where: { id },
        data: {
          ...updatedData,
        },
      });
    }),

  //delete product procedure
  deleteProduct: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.delete({
        where: { id: input.id },
      });
    }),

  //get latest products
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 4,
    });
  }),

  //get all products
  getProducts: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany({});
  }),

  getCategoriesById: publicProcedure
    .input(
      z.object({
        category: z
          .enum(["Sushi", "Ramen", "Snacks", "Sauces", "Fresh"])
          .optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const categoryFilter = input.category ? { category: input.category } : {};
      return ctx.db.post.findMany({
        where: categoryFilter,
      });
    }),

  getBestSellers: publicProcedure.query(({ ctx }) => {
    const products = ctx.db.$queryRaw<Post[]>`
    SELECT * FROM "Post" ORDER BY RANDOM() LIMIT 4`;

    return products;
  }),
});
