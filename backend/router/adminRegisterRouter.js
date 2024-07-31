import express from "express";
import { adminRegister} from "../controllers/adminRegisterController.js";

const adminRegisterRouter = express.Router();


adminRegisterRouter.post('/admin/register', adminRegister);

export default adminRegisterRouter;
 
