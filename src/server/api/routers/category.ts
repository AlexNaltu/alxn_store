import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

//category router
export const categoryRouter = createTRPCRouter({
  //get categories procedure
  getCategories: protectedProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }),
});
