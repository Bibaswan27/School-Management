import express from "express";

import { createTeacher, getAllTeachers } from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.post('/', createTeacher);
teacherRouter.get('/getall', getAllTeachers);



export default teacherRouter;
 
