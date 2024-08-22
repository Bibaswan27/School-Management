import express from "express";
import { markAttendance, getAllAttendance } from "../controllers/attendanceController.js";

const attendanceRouter = express.Router();

attendanceRouter.post('/', markAttendance);
attendanceRouter.get('/getall', getAllAttendance);

export default attendanceRouter;
