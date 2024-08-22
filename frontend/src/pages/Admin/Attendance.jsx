import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students/getall');
      setStudents(response.data.students);
      initializeAttendanceData(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: 'Present', // Default to 'Present'
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
      const formattedData = attendanceData.map(({ id, name, status }) => ({ studentId: id, name, status }));
      const response = await axios.post('http://localhost:4000/api/v1/attendance', { attendanceData: formattedData });
      console.log('Attendance data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting attendance data:', error);
    }
  };

  return (
    <div className="flex flex-row w-full"> {/* Full width layout */}
      <Sidebar className="w-64 bg-gray-800 text-white p-4" /> {/* Sidebar styles */}
      <div className="flex-1 p-4"> {/* Content area with padding */}
        <div className="text-2xl font-bold mb-4">Attendance</div> {/* Title styles */}
        <div>
          {students.map((student, index) => (
            <React.Fragment key={student.id}>
              <div className="flex items-center mb-2"> {/* Group student info */}
                <div className="w-1/2 mr-4">{student.name}</div> {/* Student name */}
                <div className="flex flex-col space-y-2"> {/* Checkbox container */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 accent-blue-600" // Checkbox styling
                      checked={attendanceData[index]?.status === 'Present'}
                      onChange={() => handleStatusChange(student.id, 'Present')}
                    />
                    Present
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 accent-blue-600" // Checkbox styling
                      checked={attendanceData[index]?.status === 'Absent'}
                      onChange={() => handleStatusChange(student.id, 'Absent')}
                    />
                    Absent
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 accent-blue-600" // Checkbox styling
                      checked={attendanceData[index]?.status === 'Absent with apology'}
                      onChange={() => handleStatusChange(student.id, 'Absent with apology')}
                    />
                    Absent with apology
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Attendance;
