import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import prismaMiddleware from "./middleware/prismaMiddleware.js";
import userRoute from "./routes/user.js";
import bookRoute from "./routes/book.js";
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(prismaMiddleware);

app.get("/ping", (req, res) => {
  res.json({ message: "This is a protected route" });
});

app.use("/users", userRoute);

app.use("/books", bookRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
