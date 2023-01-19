"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const index_1 = require("../index");
const product_1 = require("./product");
exports.appRouter = (0, index_1.mergeRouters)(product_1.productRouter);
