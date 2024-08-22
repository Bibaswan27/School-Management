import express from "express";
import { AdminSignIn } from "../controllers/adminController.js";

const adminRouter = express.Router();
adminRouter.post('/signin', AdminSignIn);

export default adminRouter;
 
