
import { Teacher } from "../models/teacherSchema.js";
import jwt from "jsonwebtoken";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const teacherSignIn = async (req, res) => {
  const { email, password} = req.body;
  try {
    if (!email || !password ) {
      handleValidationError("Please provide email and password", 400);
    }
    const existingteacher = await Teacher.findOne({ email });

    if (!existingteacher) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = existingteacher.password === password;

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { _id: existingteacher._id },
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
  export const getAllTeachers = async (req, res) => {
    try {
     const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });   
    } catch (err) {
      return res.status(400).json({message:err});
    }
  };
  
 
