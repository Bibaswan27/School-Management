import express from "express";
import { teacherRegister} from "../controllers/teacherRegisterController.js";

const teacherRegisterRouter = express.Router();


teacherRegisterRouter.post('/register', teacherRegister);

export default teacherRegisterRouter;