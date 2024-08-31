const validatorError = (errors, res, next) => {
  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg);
    error.statusCode = 400;
    error.isCustom = true;
    res.send({ error: errors.array()[0].msg });
    return next(error);
  }
  next();
};

export default validatorError;
