import { Events } from "../models/eventsSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createEvents = async (req, res) => {
  console.log(req.body);
  const { events } = req.body;
  try {
    if (!events) {
      return res.json({message:"Please Fill Form!"}, 400);
    }
    await Events.create({ events });
    res.status(200).json({
      success: true,
      message: "Event is Created!",
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};

export const deleteEvents = async (req, res) => {
  try {
    const Event = await Events.findByIdAndDelete(req.query.eventId);
    if (Event) {
      return res.status(200).json({ message: "Event found and deleted" });
    } else {
      return res.status(404).json({ message: "Event not found" });
    }
  } catch (err) {
    return res.status(400).json({message:err});
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};
