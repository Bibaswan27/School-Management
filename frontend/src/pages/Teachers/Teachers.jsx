// TeacherSection.js
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
    <div>
      <Sidebar />
      <div>
        <div>
          <div>Teachers</div>
          <div>
            {teachers.map((teacher) => (
              <div key={teacher.id}>{teacher.name} - {teacher.email} - {teacher.subject}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
