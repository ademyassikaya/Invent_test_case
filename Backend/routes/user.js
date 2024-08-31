import userValidators from "../validations/user.js";
import { Router } from "express";
import controller from "../controller/index.js";

const router = Router();
const {
  createUserValidator,
  getUserValidator,
  borrowBookValidator,
  returnBookValidator,
} = userValidators;

router.post("/", createUserValidator, controller.user.createUser);
router.get("/", controller.user.getUsers);
router.get("/:id", getUserValidator, controller.user.getUser);
router.post(
  "/:userId/borrow/:bookId",
  borrowBookValidator,
  controller.user.borrowBook
);
router.post(
  "/:userId/return/:bookId",
  returnBookValidator,
  controller.user.returnBook
);

export default router;
