import express from "express";
import { getAllStudents, studentSignIn } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get('/getall', getAllStudents);
studentRouter.post('/signin', studentSignIn);


export default studentRouter;


