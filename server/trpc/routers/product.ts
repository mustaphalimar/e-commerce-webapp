import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const productRouter = router({
  getProducts: publicProcedure.query(() => "Hello"),
  getProductByID: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      return `This is your product ${input.id}`;
    }),
});
