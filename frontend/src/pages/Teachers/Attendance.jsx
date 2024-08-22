import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const CheckAttendanceSection = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
      initializeAttendanceData(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: "Present", // Default to 'Present'
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (id, status) => {
    const updatedData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, status };
      }
      return student;
    });
    setAttendanceData(updatedData);
  };

  const handleSubmit = async () => {
    try {
      // Send attendance data to the database
      const formattedData = attendanceData.map(({ id, name, status }) => ({
        studentId: id,
        name,
        status,
      }));
      const response = await axios.post(
        "http://localhost:4000/api/v1/attendance",
        { attendanceData: formattedData }
      );
      console.log("Attendance data submitted:", response.data);
    } catch (error) {
      console.error("Error submitting attendance data:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      {" "}
      {/* Added container for layout and padding */}
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full px-4">
          {" "}
          {/* Full width for main content */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Attendance</h1>{" "}
            {/* Added heading styles */}
            <table className="table-auto w-full border border-gray-200">
              {" "}
              {/* Styled table for attendance */}
              <thead>
                <tr className="bg-gray-100 text-left text-sm">
                  <th className="px-4 py-2">Student Name</th>
                  <th className="px-4 py-2">Present</th>
                  <th className="px-4 py-2">Absent</th>
                  <th className="px-4 py-2">Absent with Apology</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">
                      <input
                        type="radio"
                        id={`present-${student.id}`}
                        name={`attendance-${student.id}`}
                        value="Present"
                        checked={attendanceData[index]?.status === "Present"}
                        onChange={() =>
                          handleStatusChange(student.id, "Present")
                        }
                        className="mr-2"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="radio"
                        id={`absent-${student.id}`}
                        name={`attendance-${student.id}`}
                        value="Absent"
                        checked={attendanceData[index]?.status === "Absent"}
                        onChange={() =>
                          handleStatusChange(student.id, "Absent")
                        }
                        className="mr-2"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="radio"
                        id={`apology-${student.id}`}
                        name={`attendance-${student.id}`}
                        value="Absent with apology"
                        checked={
                          attendanceData[index]?.status ===
                          "Absent with apology"
                        }
                        onChange={() =>
                          handleStatusChange(student.id, "Absent with apology")
                        }
                        className="mr-2"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAttendanceSection;
