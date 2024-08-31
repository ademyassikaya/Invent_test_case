import { PrismaClient } from "@prisma/client";

const prismaMiddleware = (req, res, next) => {
  req.prisma = new PrismaClient();
  next();
};

export default prismaMiddleware;
