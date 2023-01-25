"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_1 = require("../trpc");
const product_1 = require("./product");
exports.appRouter = (0, trpc_1.mergeRouters)(product_1.productRouter);
