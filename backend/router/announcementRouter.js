import express from "express";
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementConroller.js";

const announcementRouter = express.Router();

announcementRouter.get('/getall', getAllAnnouncements);
announcementRouter.post('/', createAnnouncement);


export default announcementRouter; 


