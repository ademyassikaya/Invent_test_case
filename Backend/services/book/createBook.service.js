import { BadRequestError } from "../../errors/index.js";

export default async function createBook({ prisma, name }) {
  const bookExists = await prisma.book.findFirst({
    where: {
      name,
    },
  });
  if (bookExists) {
    throw new BadRequestError("Book Already Exists");
  }
  const book = await prisma.book.create({
    data: {
      name,
    },
  });
  return book;
}
