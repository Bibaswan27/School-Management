import express from "express";
import {
  getAllBooks,
  createBook,
  pickBook,
  returnBook,
} from "../controllers/libraryConroller.js";

const libraryRouter = express.Router();

libraryRouter.get('/getall', getAllBooks);
libraryRouter.post('/books', createBook);
libraryRouter.put('/books/:bookId/pick', pickBook);
libraryRouter.put('/books/:bookId/return', returnBook);

export default libraryRouter;

