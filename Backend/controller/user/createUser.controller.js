import services from "../../services/index.js";

export default async function createUser(req, res, next) {
  try {
    const { name } = req.body;
    const user = await services.user.createUser({
      prisma: req.prisma,
      name,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
}
