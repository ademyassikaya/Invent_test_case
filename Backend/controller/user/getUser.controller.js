import services from "../../services/index.js";

export default async function getUser(req, res, next) {
  try {
    const user = await services.user.getUser({
      prisma: req.prisma,
      id: req.params.id,
    });

    res.json(user);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
}
