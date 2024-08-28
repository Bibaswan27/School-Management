import { Teacher } from "../models/teacherSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const teacherRegister= async (req, res) => {
  const { name, email, password, subject } = req.body;
  try {
      if (!email || !password || !name || !subject ) {
        handleValidationError("Please Fill Form!", 400);
  }
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ success: false, message: "Teacher already exists" });
    }
  const teacher = await Teacher.create({name, email, password, subject});
  console.log(teacher);
  res.status(200).json({
    success: true,
    message: "Teacher Created!",
  });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};