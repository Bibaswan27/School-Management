import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const StudentSection = () => {
  const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', grade: '' });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students/getall');
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">  {/* Added container for layout and padding */}
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full px-4">  {/* Full width for main content */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Students</h1> {/* Added heading styles */}
            <ul className="list-disc space-y-2"> {/* Styled list for students */}
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between"> {/* Added spacing and structure */}
                  <div className="flex items-center">
                    <span className="font-medium"><h3 className="font-bold">Name</h3>{student.name}<h3 className="font-bold">Registration Number</h3>{student.registrationNumber}</span>
                  </div>
                  <div className="flex space-x-4">
                    <span>{student.grade}</span>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;