
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Retrieve username from local storage
  useEffect(() => {
    const storedUsername = localStorage.getItem("username"); // Change here to fetch username
    console.log(storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername("User"); // Default value if username not found
    }
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");  // Clear the auth token
    localStorage.removeItem("username");   // Clear the stored username
    navigate("/login");  // Redirect to login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-700 text-center">Dashboard</h1>
        <p className="text-xl text-gray-600 text-center mt-4">Hi, {username}!</p>
        
        <div className="mt-6 flex justify-center space-x-4">
          <a href="/profile" className="text-blue-500 hover:text-blue-700">Profile</a>
          <a href="/change-password" className="text-blue-500 hover:text-blue-700">Change Password</a>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
