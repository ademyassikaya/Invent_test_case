import { BadRequestError } from "../../errors/index.js";

export default async function getUsers({ prisma }) {
  const users = await prisma.user.findMany();
  if (!users) {
    throw new BadRequestError("No Users Found");
  }
  return users;
}
