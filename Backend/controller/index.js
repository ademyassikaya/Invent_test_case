// USER CONTROLLER
import createUser from "./user/createUser.controller.js";
import getUsers from "./user/getUsers.controller.js";
import getUser from "./user/getUser.controller.js";
import borrowBook from "./user/borrowBook.controller.js";
import returnBook from "./user/returnBook.controller.js";
// BOOK CONTROLLER
import createBook from "./book/createBook.controller.js";
import getBooks from "./book/getBooks.controller.js";
import getBook from "./book/getBook.controller.js";
const controller = {
  user: {
    createUser,
    getUsers,
    getUser,
    borrowBook,
    returnBook,
  },
  book: {
    createBook,
    getBooks,
    getBook,
  },
};

export default controller;
