import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const TeacherSection = () => {
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '' });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/teachers/getall');
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  return (
    <div className="flex flex-row container mx-auto px-4 py-4 bg-gray-100 rounded-lg shadow-md"> {/* Added container and basic styling */}
      <Sidebar />
      <div className="flex flex-col space-y-4"> {/* Main content as a column with spacing */}
        <div className="text-2xl font-bold mb-4">Teachers</div> {/* Added heading styles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Grid layout for teachers on medium screens and above */}
          {teachers.map((teacher) => (
            <div key={teacher.id} className="p-4 bg-white rounded-lg shadow-md"> {/* Styled teacher card */}
              <div className="font-bold">{teacher.name}</div> {/* Bold name */}
              <div>{teacher.email}</div>
              <div>{teacher.subject}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
