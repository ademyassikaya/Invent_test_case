import bookValidation from "../validations/book.js";
import { Router } from "express";
import controller from "../controller/index.js";

const router = Router();
const { createBookValidator } = bookValidation;

router.post("/", createBookValidator, controller.book.createBook);
router.get("/", controller.book.getBooks);
router.get("/:id", controller.book.getBook);

export default router;
