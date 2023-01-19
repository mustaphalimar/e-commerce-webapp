"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRouters = exports.publicProcedure = exports.middleware = exports.router = void 0;
const server_1 = require("@trpc/server");
// You can use any variable name you like.
// We use t to keep things simple.
const t = server_1.initTRPC.create();
exports.router = t.router;
exports.middleware = t.middleware;
exports.publicProcedure = t.procedure;
exports.mergeRouters = t.mergeRouters;
