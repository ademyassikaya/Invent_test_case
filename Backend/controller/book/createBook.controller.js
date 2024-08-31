import services from "../../services/index.js";

export default async function createBook(req, res, next) {
  try {
    const { name } = req.body;
    const book = await services.book.createBook({
      prisma: req.prisma,
      name,
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
}
