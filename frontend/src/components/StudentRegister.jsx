import React, { useState } from 'react';

import axios from 'axios';

const StudentRegister = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/students/register',
        { name, registrationNumber, email, password }
      );
      if (response.status === 200) {
        // Registration successful, redirect to admin login
        window.location.href = '/student-signIn';
      } else {
        // Handle registration errors
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-medium mb-4">Student Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="registrationNumber"
              className="block text-sm font-medium mb-2"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              placeholder="Enter your registration number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
