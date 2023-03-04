import { PrismaClient } from "@prisma/client";

const client = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
2
export default client;
