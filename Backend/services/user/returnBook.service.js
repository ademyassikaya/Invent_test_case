import { BadRequestError } from "../../errors/index.js";

export default async function returnBook({ prisma, userId, bookId, score }) {
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(userId),
    },
  });
  if (!user) {
    throw new BadRequestError("User Not Found");
  }

  const book = await prisma.book.findFirst({
    where: {
      id: parseInt(bookId),
    },
  });
  if (!book) {
    throw new BadRequestError("Book Not Found");
  }

  const userBook = await prisma.userBook.findFirst({
    where: {
      bookId: parseInt(bookId),
      userId: parseInt(userId),
      status: "PRESENT",
    },
    orderBy: {
      updatedDate: "desc",
    },
  });
  if (!userBook) {
    throw new BadRequestError("Book Not Borrowed");
  }

  const generalScore = await prisma.generalScore.findFirst({
    where: {
      bookId: parseInt(bookId),
    },
  });

  if (!generalScore) {
    await prisma.generalScore.create({
      data: {
        bookId: parseInt(bookId),
        score: score,
        count: 1,
      },
    });
  } else {
    await prisma.generalScore.update({
      where: {
        id: generalScore.id,
      },
      data: {
        score:
          (generalScore.score * generalScore.count + score) /
          (generalScore.count + 1),
        count: generalScore.count + 1,
      },
    });
  }
  return await prisma.userBook.update({
    where: {
      id: userBook.id,
    },
    data: {
      status: "PAST",
      userScore: score,
    },
  });
}
