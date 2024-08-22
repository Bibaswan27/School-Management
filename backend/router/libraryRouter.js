import express from "express";
import { getAllBooks, createBook } from "../controllers/libraryConroller.js";

const libraryRouter = express.Router();

libraryRouter.get('/getall', getAllBooks);
libraryRouter.post('/books', createBook);


export default libraryRouter;


