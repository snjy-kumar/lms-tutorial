import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
};


export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
// ^^ this is development code
// export const db = new PrismaClient(); // <-- this is production code