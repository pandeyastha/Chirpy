import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}
 {/**Cure for NEXTJS Hot-reloading  ----> creates no multiple instance ----> improves scalability
with less memory usage as single instance shared bw resources */}

const client=globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma =client;

export default client;