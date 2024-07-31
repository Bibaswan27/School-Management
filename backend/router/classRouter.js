import express from "express";
import { getAllClasses, createClass } from "../controllers/classConroller.js";

const classRouter = express.Router();

classRouter.get('/getall', getAllClasses);
classRouter.post('/', createClass);


export default classRouter;


