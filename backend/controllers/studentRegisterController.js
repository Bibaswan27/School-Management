import { Student } from "../models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const studentRegister= async (req, res, next) => {
  //console.log(req.body);
  const { name, registrationNumber,email, password  } = req.body;
  try {
      if (!email || !password || !registrationNumber || !name  ) {
        handleValidationError("Please Fill Form!", 400);
  }

    // Check if the admin already exists in the database
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
    next(err);
  }
};