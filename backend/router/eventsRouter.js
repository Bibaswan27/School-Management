import express from "express";
import { getAllEvents, createEvents } from "../controllers/eventsController.js";

const eventsRouter = express.Router();

eventsRouter.get('/getall', getAllEvents);
eventsRouter.post('/', createEvents);


export default eventsRouter;


