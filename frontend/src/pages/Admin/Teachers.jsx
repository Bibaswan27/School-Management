import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const Teachers = () => {
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

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (newTeacher.name.trim() !== '' && newTeacher.email.trim() !== '' && newTeacher.subject.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/teachers', newTeacher);
        const createdTeacher = response.data.teacher;
        setTeachers([...teachers, createdTeacher]);
        setNewTeacher({ name: '', email: '', subject: '' });
      } catch (error) {
        console.error('Error adding teacher:', error);  
      }
    }
  };

  return (
    <div className="flex flex-rowcontainer mx-auto px-4 py-2">
      <Sidebar />
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">Teachers</h1>
        <form onSubmit={handleAddTeacher} className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Enter teacher name"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
          <input
            type="email"
            placeholder="Enter teacher email"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
          <input
            type="text"
            placeholder="Enter teacher subject"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Add Teacher
          </button>
        </form>
        <div className="flex flex-col space-y-2">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="p-3 bg-gray-100 rounded border border-gray-300">
              {teacher.name} - {teacher.subject}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
