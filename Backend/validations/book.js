import { body, validationResult, matchedData } from "express-validator";
import validateError from "../utils/validateError.js";

const createBookValidator = async (req, res, next) => {
  await body("name")
    .isString()
    .isLength({ min: 3, max: 25 })
    .withMessage("Book name need to be a string and between 3 to 25 characters")
    .run(req);
  req.body = matchedData(req);
  validateError(validationResult(req), res, next);
};

export default {
  createBookValidator,
};
