import { BadRequestError } from "../../errors/index.js";

export default async function getBooks({ prisma, id }) {
  const book = await prisma.book.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  if (!book) {
    throw new BadRequestError("No Books Found");
  }
  const generalScore = await prisma.generalScore.findFirst({
    where: {
      bookId: parseInt(id),
    },
  });
  if (!generalScore) {
    return {
      ...book,
      score: -1,
    };
  }
  return {
    ...book,
    score: generalScore.score,
  };
}
