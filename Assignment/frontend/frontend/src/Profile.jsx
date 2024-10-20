import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || "John Doe"; // Get the username from localStorage
  const email = "user@example.com";  // Placeholder, replace with real data
  const dateJoined = "2023-01-15";  // Placeholder, replace with real data
  const lastUpdated = "2024-10-10";  // Placeholder, replace with real data

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate("/login");  // Redirect to login page
  };

  return (
    <div className="p-6 bg-white shadow-lg max-w-md mx-auto rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="mb-2">
        <strong>Username:</strong> {username}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {email}
      </div>
      <div className="mb-2">
        <strong>Date Joined:</strong> {dateJoined}
      </div>
      <div className="mb-2">
        <strong>Last Updated:</strong> {lastUpdated}
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
