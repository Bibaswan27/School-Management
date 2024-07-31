import React, { useState } from 'react';
import axios from 'axios';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4000/api/v1/users/admin/signin', { email:email, password:password }); 
      console.log(response.data);
      if (response.status === 200) {
        // Sign-in successful, redirect to admin dashboard
        window.location.href = '/admin/dashboard';
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-">
      <h2>Admin Signin</h2>
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
        onClick={(e) => handleSignIn(e)}>
        Register
        </button>
      </form>
    </div>
  );
};

export default AdminSignIn;
