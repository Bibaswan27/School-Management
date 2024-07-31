// Import the Student model from the studentSchema file
import { Student } from "../models/studentSchema.js";

// Import the handleValidationError function from the errorHandler middleware
import { handleValidationError } from "../middlewares/errorHandler.js";

// Function to create a new student (uses async/await for asynchronous operations)
export const createStudent = async (req, res, next) => {
  // Log the request body for debugging purposes
  console.log(req.body);

  // Destructure the name, registrationNumber, and grade properties from the request body
  const { name, registrationNumber, grade } = req.body;

  try {
    // Check if any of the required fields are missing
    if (!name || !registrationNumber || !grade) {
      // If missing, call the next middleware function with an error message and status code
      return next("Please Fill Full Form!", 400);
    }

    // Create a new student document using the Student model with the provided data
    await Student.create({ name, registrationNumber, grade });

    // Send a success response with a message
    res.status(200).json({
      success: true,
      message: "Student Created!",
    });
  } catch (err) {
    // Catch any errors during the process and pass them to the next middleware function
    next(err);
  }
};

// Function to retrieve all students (uses async/await for asynchronous operations)
export const getAllStudents = async (req, res, next) => {
  try {
    // Find all student documents using the Student model
    const students = await Student.find();

    // Send a success response with an array of all students
    res.status(200).json({
      success: true,
      students,
    });
  } catch (err) {
    // Catch any errors during the process and pass them to the next middleware function
    next(err);
  }
};



