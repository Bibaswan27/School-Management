import mongoose from "mongoose";
import validator from "validator";
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  subject: {
    type: String,
    required: true
  },
});


export const Teacher = mongoose.model('Teacher', teacherSchema);

