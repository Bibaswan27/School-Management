
import {Exam} from "../models/examSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const addExam = async (req, res, next) => {
  console.log(req.body);
  const { name,  className, marks } = req.body;
  try {
    if (!name || !className || !marks) {
        handleValidationError("Please fill out all fields!", 400);
    }
    await Exam.create({ name, className, marks });
    res.status(200).json({
      success: true,
      message: "A new exam has been added!",
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};

export const getAllExams = async (req, res, next) => {
  try {
    const exams = await Exam.find();
    res.status(200).json({
      success: true,
      exams,
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};
