"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const index_1 = require("../index");
exports.productRouter = (0, index_1.router)({
    getProducts: index_1.publicProcedure.query(() => 'Hello'),
});
