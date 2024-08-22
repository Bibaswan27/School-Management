import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Exam = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [className, setClassName] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/exam/getall"
      );
      if (Array.isArray(response.data)) {
        setExamData(response.data);
      } else {
        setExamData([response.data]); // Wrap non-array response in an array
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    const newExam = {
      name,
      registrationNumber,
      className,
      marks: parseInt(marks),
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/exam",
        newExam
      );
      // Ensure response data is always an object
      if (typeof response.data === "object") {
        setExamData([...examData, response.data]);
        setName("");
        setRegistrationNumber("");
        setClassName("");
        setMarks("");
      } else {
        console.error("Error: API response data is not an object");
      }
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i++) {
      total += examData[i].marks;
    }
    return total;
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="col-span-9 bg-gray-100 rounded-lg p-4 shadow-md">
        <div>
          <h1 className="text-2xl font-bold mb-4">Exam Details</h1>
          <form onSubmit={handleAddExam}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-1 text-sm">
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="registrationNumber" className="mb-1 text-sm">
                Registration Number:
              </label>
              <input
                id="registrationNumber"
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="className" className="mb-1 text-sm">
                Class:
              </label>
              <input
                id="className"
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="marks" className="mb-1 text-sm">
                Marks:
              </label>
              <input
                id="marks"
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                required
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Exam
            </button>
          </form>
        </div>
        <h2 className="text-xl font-bold mb-4">
          Total Marks: {calculateTotalMarks()}
        </h2>
        <h3 className="text-lg font-semibold mb-2">Exam Details:</h3>
        <ul className="space-y-2">
          {examData.map((exam, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2">Name:</span>
                <span>{exam.name}</span>
                <span className="mx-4">Registration Number:</span>
                <span>{exam.registrationNumber}</span>
                <span className="mx-4">Class:</span>
                <span>{exam.className}</span>
                <span className="ml-4">Marks:</span>
                <span>{exam.marks}</span>
              </div>
              {/* Add a delete button here if needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exam;
