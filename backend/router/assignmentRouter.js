import express from "express";
import { createAssignment, getAllAssignments } from "../controllers/assignmentController.js";


const assignmentRouter = express.Router();

assignmentRouter.post("/", createAssignment);
assignmentRouter.get("/getall", getAllAssignments);

export default assignmentRouter;
