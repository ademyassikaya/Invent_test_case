// USER SERVİCES
import createUser from "./user/createUser.service.js";
import getUsers from "./user/getUsers.service.js";
import getUser from "./user/getUser.service.js";
import borrowBook from "./user/borrowBook.service.js";
import returnBook from "./user/returnBook.service.js";
// BOOK SERVİCES
import createBook from "./book/createBook.service.js";
import getBooks from "./book/getBooks.service.js";
import getBook from "./book/getBook.service.js";
const services = {
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

export default services;
