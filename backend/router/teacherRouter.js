import express from "express";

import { teacherSignIn, getAllTeachers } from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.post('/signin', teacherSignIn);
teacherRouter.get('/getall', getAllTeachers);



export default teacherRouter;
 
