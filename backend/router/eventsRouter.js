import express from "express";
import { getAllEvents, createEvents, deleteEvents } from "../controllers/eventsController.js";

const eventsRouter = express.Router();

eventsRouter.get('/getall', getAllEvents);
eventsRouter.post('/', createEvents);
eventsRouter.delete('/deleteEvent', deleteEvents);


export default eventsRouter;


