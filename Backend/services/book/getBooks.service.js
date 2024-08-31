import { BadRequestError } from "../../errors/index.js";

export default async function getBooks({ prisma }) {
  const books = await prisma.book.findMany();
  if (!books) {
    throw new BadRequestError("No Books Found");
  }
  return books;
}
