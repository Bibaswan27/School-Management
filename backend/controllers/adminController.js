import { handleValidationError } from "../middlewares/errorHandler.js";
import { Admin } from "../models/adminSchema.js";
import jwt from "jsonwebtoken";

export const AdminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = existingAdmin.password === password;

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const token = jwt.sign(
      { _id: existingAdmin._id },
      "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
      { expiresIn: "5h" }
    );

    res.status(200).json({
      token: token,
      success: true,
      message: "Signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};
