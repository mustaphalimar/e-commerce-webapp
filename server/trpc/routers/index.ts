import { mergeRouters } from '../index';

import { productRouter } from './product';

export const appRouter = mergeRouters(productRouter);
