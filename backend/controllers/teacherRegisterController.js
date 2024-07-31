import { Teacher } from "../models/teacherSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const teacherRegister= async (req, res, next) => {
  //console.log(req.body);
  const { email, password  } = req.body;
  try {
      if (!email || !password  ) {
        handleValidationError("Please Fill Form!", 400);
  }

    // Check if the admin already exists in the database
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ success: false, message: "Teacher already exists" });
    }

  await Teacher.create({ email, password});
  res.status(200).json({
    success: true,
    message: "Teacher Created!",
  });
  } catch (err) {
    next(err);
  }
};