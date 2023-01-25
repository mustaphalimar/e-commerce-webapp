import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

import { appRouter } from "./trpc/routers";
export type AppRouter = typeof appRouter;

async function main() {
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    })
  );

  app.get("/", (req, res) => {
    res.send("Hello From The Server.");
  });

  app.listen(PORT, () => {
    console.log(`Server Started on Port : ${PORT}`);
  });
}

main().catch((error) =>
  console.log(`There was an error in the main function ! : ${error.message}`)
);
