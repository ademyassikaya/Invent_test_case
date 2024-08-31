import { BadRequestError } from "../../errors/index.js";

export default async function createUser({ prisma, name }) {
  const userExists = await prisma.user.findFirst({
    where: {
      name,
    },
  });
  if (userExists) {
    throw new BadRequestError("User Already Exists");
  }
  const user = await prisma.user.create({
    data: {
      name,
    },
  });
  return user;
}
