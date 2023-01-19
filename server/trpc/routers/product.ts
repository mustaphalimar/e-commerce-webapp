import { router, publicProcedure } from '../index';
import { z } from 'zod';

export const productRouter = router({
  getProducts: publicProcedure.query(() => 'Hello'),
});
