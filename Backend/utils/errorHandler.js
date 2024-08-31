export default function errorHandler(req, res, next, err) {
  let statusCode = 500;
  let message = "Internal Server Error";
  if (err.message === "Must Be Unique") {
    statusCode = 400;
    message = "Must Be Unique";
  }

  res.status(statusCode).json({ message });
}
