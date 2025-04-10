/**
 * Prisma client
 */

// Need to specify client path directly now
import { PrismaClient } from '../db/generated/client/client';

let prisma = new PrismaClient();

export default prisma;
