import express from "express";
import { studentRegister} from "../controllers/studentRegisterController.js";

const studentRegisterRouter = express.Router();


studentRegisterRouter.post('/register', studentRegister);

export default studentRegisterRouter;
 