import services from "../../services/index.js";

export default async function borrowBook(req, res, next) {
  try {
    const { userId, bookId } = req.params;

    const borrow = await services.user.borrowBook({
      prisma: req.prisma,
      userId,
      bookId,
    });

    res.json(borrow);
  } catch (error) {
    res.send(error.message);
  }
}
