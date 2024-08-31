import services from "../../services/index.js";

export default async function getBooks(req, res, next) {
  try {
    const books = await services.book.getBooks({
      prisma: req.prisma,
    });

    res.json(books);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
}
