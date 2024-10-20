import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password must match!");
      return;
    }

    // Simulate password change request (Replace with actual API call)
    alert("Password changed successfully!");
    navigate("/dashboard");  // Redirect to dashboard after password change
  };

  return (
    <div className="p-6 bg-white shadow-lg max-w-md mx-auto rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Change Password</h1>
      <form onSubmit={handlePasswordChange}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Current Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">New Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Confirm New Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
