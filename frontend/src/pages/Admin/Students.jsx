import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const Students = () => {
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

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (newStudent.name.trim() !== '' && newStudent.registrationNumber.trim() !== '' && newStudent.grade.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/students', newStudent);
        setStudents([...students, response.data.student]);
        setNewStudent({ name: '', registrationNumber: '', grade: '' });
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-full px-4 py-6">
        <div className="flex flex-col space-y-4">
          <div className="text-xl font-bold">Students</div>
          <form onSubmit={handleAddStudent} className="flex flex-col space-y-2">
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                placeholder="Enter student name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Enter registration number"
                value={newStudent.registrationNumber}
                onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 md:w-1/2"
              />
              <input
                type="text"
                placeholder="Enter grade"
                value={newStudent.grade}
                onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 md:w-1/2"
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Add Student
            </button>
          </form>
          <div className="flex flex-col space-y-1">
            {students.map((student) => (
              <div key={student.id} className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md">
                <span className="font-medium">{student.name}</span>
                -
                <span>{student.registrationNumber}</span>
                -
                <span>{student.grade}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
