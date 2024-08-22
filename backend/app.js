import express from "express";
import {config} from 'dotenv';
import cors from "cors";
import {dbConnection} from "./database/dbConnection.js";
import adminRouter from "./router/adminRouter.js";
import studentRouter from "./router/studentRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assignmentRouter from "./router/assignmentRouter.js";
import adminRegisterRouter from "./router/adminRegisterRouter.js";
import studentRegisterRouter from "./router/studentRegisterRouter.js";
import teacherRegisterRouter from "./router/teacherRegisterRouter.js";
import announcementRouter from "./router/announcementRouter.js";
import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
import examRouter from "./router/examRouter.js";
import attendanceRouter from "./router/attendanceRouter.js";

import  { errorHandler } from "./middlewares/errorHandler.js";



const app = express();
config({path: "./config/config.env"});
app.use(cors());

app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
  });
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/admins", adminRegisterRouter);
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/students", studentRegisterRouter);
app.use("/api/v1/teachers", teacherRegisterRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/attendance", attendanceRouter);



dbConnection()
 
export default app;
