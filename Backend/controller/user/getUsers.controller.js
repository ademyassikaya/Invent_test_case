import services from "../../services/index.js";

export default async function getUsers(req, res, next) {
  try {
    const users = await services.user.getUsers({
      prisma: req.prisma,
    });

    res.json(users);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
}
