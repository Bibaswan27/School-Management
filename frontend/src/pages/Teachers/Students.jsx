// StudentSection.js
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
    <div>
      <Sidebar />
      <div>
        <div>
          <div>Students</div>
          <div>
            {students.map((student) => (
              <div key={student.id}>{student.name} - {student.registrationNumber} - {student.grade}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;
