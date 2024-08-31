import services from "../../services/index.js";

export default async function getBook(req, res, next) {
  try {
    const book = await services.book.getBook({
      prisma: req.prisma,
      id: req.params.id,
    });

    res.json(book);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
}
