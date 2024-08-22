import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const CheckExamSection = () => {
  const [examData, setExamData] = useState([]); // Initialize with empty array
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    fetchExams(); // Fetch exams on component mount
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/exam/getall"
      );
      setExamData(response.data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    const newExam = {
      name,
      className,
      marks: parseInt(marks),
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/exam",
        newExam
      );
      if (examData.length > 0) {
        setExamData([...examData, response.data]); // Use spread with condition
      } else {
        setExamData([response.data]); // Set initial data if empty
      }
      setName("");
      setClassName("");
      setMarks("");
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
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-row">
        <Sidebar />
        <div className="col-span-8 bg-white rounded-lg shadow-md px-6 py-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">Exam Details</h2>
          </div>
          <form onSubmit={handleAddExam} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="className"
                className="block text-sm font-medium text-gray-700"
              >
                Class:
              </label>
              <input
                type="text"
                id="className"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="marks"
                className="block text-sm font-medium text-gray-700"
              >
                Marks:
              </label>
              <input
                type="number"
                id="marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
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

        {/* Exam Results */}
        <div className="col-span-full md:col-span-8 bg-white rounded-lg shadow-md px-6 py-8">
          <h2 className="text-xl font-bold text-gray-800">Exam Results</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold uppercase tracking-wider">
                    Marks
                  </th>
                </tr>
              </thead>
              {examData.length > 0 && (
                <tbody>
                  {examData.map((exam) => (
                    <tr key={exam._id}>
                      <td className="border px-4 py-2">{exam.name}</td>
                      <td className="border px-4 py-2">{exam.className}</td>
                      <td className="border px-4 py-2">{exam.marks}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckExamSection;
