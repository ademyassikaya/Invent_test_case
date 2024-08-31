import services from "../../services/index.js";

export default async function returnBook(req, res, next) {
  try {
    const { userId, bookId } = req.params;
    const score = req.body.score;
    const returnBook = await services.user.returnBook({
      prisma: req.prisma,
      userId,
      bookId,
      score,
    });

    res.json(returnBook);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
}
