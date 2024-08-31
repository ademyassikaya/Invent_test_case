import { BadRequestError } from "../../errors/index.js";

export default async function borrowBook({ prisma, userId, bookId }) {
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
    },
    orderBy: {
      updatedDate: "desc",
    },
  });
  if (userBook && userBook.status === "PRESENT") {
    throw new BadRequestError("Book Already Borrowed");
  }

  return await prisma.userBook.create({
    data: {
      userId: parseInt(userId),
      bookId: parseInt(bookId),
      status: "PRESENT",
    },
  });
}
