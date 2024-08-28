
import { Student } from "../models/studentSchema.js";
import jwt from "jsonwebtoken";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const studentSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    const existingstudent = await Student.findOne({ email });

    if (!existingstudent) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = existingstudent.password === password;

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { _id: existingstudent._id },
      "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
      { expiresIn: "5h" }
    );

    res.status(200).json({
      token: token,
      success: true,
      message: "Signed in successfully",
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      students,
    });
  } catch (err) {
    return res.status(400).json({message:err});
  }
};



