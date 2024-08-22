import React from 'react';
import { Link } from 'react-router-dom';

const ChooseUser = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-medium mb-4">Choose User</h2>
        <div className="space-y-4">
          <Link to="/admin-signIn" className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Admin
          </Link>
          <Link to="/student-signIn" className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Student
          </Link>
          <Link to="/teacher-signIn" className="flex items-center justify-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
            Teacher
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;

