import express from "express";
import { getAllExams, addExam } from "../controllers/examController.js";

const examRouter = express.Router();

examRouter.get('/getall', getAllExams);
examRouter.post('/', addExam);


export default examRouter; 
