import { Events } from "../models/eventsSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createEvents = async (req, res, next) => {
  console.log(req.body);
  const { events } = req.body;
  try {
    if (!events) {
      return next("Please Fill Form!", 400);
    }
    await Events.create({ events });
    res.status(200).json({
      success: true,
      message: "Event is Created!",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteEvents = async (req, res, next) => {
  try {
    const Event = await Events.findByIdAndDelete(req.query.eventId);
    console.log(Event);
    if (Event) {
      return res.status(200).json({ message: "Event found and deleted" });
    } else {
      return res.status(404).json({ message: "Event not found" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await Events.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (err) {
    next(err);
  }
};
