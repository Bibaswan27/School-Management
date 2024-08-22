import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const Exam = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/exam/getall');
      setExams(response.data.exams);
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <Sidebar />
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">Upcoming Exams</h1>
        <table className="table-auto w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="px-4 py-2">name</th>
              <th className="px-4 py-2">className</th>
              <th className="px-4 py-2">marks</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{exam.name}</td>
                <td className="px-4 py-2">{exam.className}</td>
                <td className="px-4 py-2">{exam.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exam;