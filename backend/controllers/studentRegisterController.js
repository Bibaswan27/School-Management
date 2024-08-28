import { Student } from "../models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const studentRegister= async (req, res) => {
  const { name, registrationNumber,email, password  } = req.body;
  try {
      if (!email || !password || !registrationNumber || !name  ) {
        handleValidationError("Please Fill Form!", 400);
  }
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ success: false, message: "Student already exists" });
    }
  await Student.create({name,registrationNumber,email, password});
  res.status(200).json({
    success: true,
    message: "Student Created!",
  });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};