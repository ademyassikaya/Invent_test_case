class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends CustomError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

class InternalServerError extends CustomError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}

export { CustomError, BadRequestError, NotFoundError, InternalServerError };
