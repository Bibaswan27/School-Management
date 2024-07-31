import express from "express";
import { AdminSignIn } from "../controllers/adminController.js";

const adminRouter = express.Router();
adminRouter.post('/admin/signin', AdminSignIn);

export default adminRouter;
 
