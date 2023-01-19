import express from 'express';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

import { appRouter } from './trpc/routers';
export type AppRouter = typeof appRouter;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello From The Server.');
});

app.listen(PORT, () => {
  console.log(`Server Started on Port : ${PORT}`);
});
