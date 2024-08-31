import { BadRequestError } from "../../errors/index.js";

export default async function getUser({ prisma, id }) {
  let user = await prisma.user.findFirst({
    where: {
      id: parseInt(id),
    },
    include: {
      books: {
        include: {
          book: true,
        },
      },
    },
  });

  if (!user) {
    throw new BadRequestError("User Not Found");
  }

  const presentBooks = [];
  const pastBooks = [];

  user.books.forEach((book) => {
    if (book.status === "PRESENT") {
      presentBooks.push({
        name: book.book.name,
      });
    } else if (book.status === "PAST") {
      pastBooks.push({
        name: book.book.name,
        userScore: book.userScore,
      });
    }
  });

  return {
    id: user.id,
    name: user.name,
    books: {
      past: pastBooks,
      present: presentBooks,
    },
  };
}
