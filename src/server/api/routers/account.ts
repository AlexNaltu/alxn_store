import { createTRPCRouter, protectedProcedure } from "../trpc";

export const accountsRouter = createTRPCRouter({
  accounts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.account.count();
  }),
});
