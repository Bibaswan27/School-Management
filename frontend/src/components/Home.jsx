import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <header className="flex justify-between items-center p-4">
        <nav className="flex space-x-4">
          <Link to="#" className="hover:text-gray-400">About Us</Link>
          <Link to="#" className="hover:text-gray-400">Products</Link>
          <Link to="#" className="hover:text-gray-400">Contact Us</Link>
        </nav>
        <div className="flex space-x-4">
          <button onClick={handleLoginClick} className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-400">
            Sign In
          </button>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our School Management System</h1>
          <p className="text-lg mb-8">
            Manage your school effortlessly with our comprehensive platform.
            Track students, teachers, and administrative tasks efficiently.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;

