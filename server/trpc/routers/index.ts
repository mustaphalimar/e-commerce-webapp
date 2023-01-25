import { mergeRouters } from "../trpc";

import { productRouter } from "./product";

export const appRouter = mergeRouters(productRouter);
