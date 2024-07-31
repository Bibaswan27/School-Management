import React, { useState } from 'react';
import axios from 'axios'; // Import axios;
const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      const response = await axios.post('http://localhost:4000/api/v1/users/admin/register', { email:email, password : password}); 
      if (response.status === 200) {
        // Registration successful, redirect to admin login
        window.location.href = '/admin-signIn';
      } else {
        // Handle registration errors
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
   

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-pink-400 via-orange-300 to-green-400 h-screen">
      <h2>Admin Register</h2>
      <form className="flex flex-col items-center w-4/5 max-w-md p-4 border border-gray-300 rounded-md bg-gray-100 shadow-sm">
      <input className="w-full p-2 m-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="w-full p-2 m-2 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full p-3 mt-4 border-none rounded bg-orange-500 text-white font-bold text-lg hover:bg-orange-400 transition duration-300 ease-in-out sm:text-base"
        onClick={(e) => handleRegister(e)}>
        Register
        </button>
      </form>
    </div>
  );
};

export default AdminRegister;
