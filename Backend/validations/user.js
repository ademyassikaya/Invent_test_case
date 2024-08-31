import { body, validationResult, matchedData, param } from "express-validator";
import validateError from "../utils/validateError.js";

const createUserValidator = async (req, res, next) => {
  await body("name")
    .isString()
    .isLength({ min: 3, max: 25 })
    .withMessage("User name need to be a string and between 3 to 25 characters")
    .run(req);
  req.body = matchedData(req);
  validateError(validationResult(req), res, next);
};

const getUserValidator = async (req, res, next) => {
  await param("id")
    .isInt()
    .withMessage("User id need to be an integer")
    .run(req);
  req.body = matchedData(req);
  validateError(validationResult(req), res, next);
};

const borrowBookValidator = async (req, res, next) => {
  await param("userId")
    .isInt()
    .withMessage("User id need to be an integer")
    .run(req);
  await param("bookId")
    .isInt()
    .withMessage("Book id need to be an integer")
    .run(req);
  req.body = matchedData(req);
  validateError(validationResult(req), res, next);
};

const returnBookValidator = async (req, res, next) => {
  await param("userId")
    .isInt()
    .withMessage("User id need to be an integer")
    .run(req);
  await param("bookId")
    .isInt()
    .withMessage("Book id need to be an integer")
    .run(req);
  await body("score")
    .isInt({ min: 1, max: 10 })
    .withMessage("Score need to be an integer between 1 to 10")
    .run(req);
  req.body = matchedData(req);
  validateError(validationResult(req), res, next);
};

export default {
  createUserValidator,
  getUserValidator,
  borrowBookValidator,
  returnBookValidator,
};
