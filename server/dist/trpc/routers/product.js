"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const trpc_1 = require("../trpc");
const zod_1 = require("zod");
exports.productRouter = (0, trpc_1.router)({
    getProducts: trpc_1.publicProcedure.query(() => "Hello"),
    getProductByID: trpc_1.publicProcedure
        .input(zod_1.z.object({ id: zod_1.z.number() }))
        .query(({ input }) => {
        return `This is your product ${input.id}`;
    }),
});
