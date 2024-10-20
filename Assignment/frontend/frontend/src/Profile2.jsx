// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Profile2 = () => {
//   const [profileData, setProfileData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();


//   const fetchProfile = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/auth/profile/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('access_token')}`,
//         },
//       });
//       setProfileData(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to fetch profile data');  // This will be displayed if there's an error
//       console.error(err); // Log the error for debugging
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//    fetchProfile();
//     }
//     , []);

//   const handleLogout = () => {
//     // Clear token and redirect to login
//     localStorage.removeItem('access_token');
//     navigate('/login');
//   };

//   const goToDashboard = () => {
//     navigate('/dashboard');
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="profile-container">
//       <h2>Profile Page</h2>
//       <div className="profile-info">
//         <p><strong>Username:</strong> {profileData.username}</p>
//         <p><strong>Email:</strong> {profileData.email}</p>
//         <p><strong>Date Joined:</strong> {new Date(profileData.date_joined).toLocaleDateString()}</p>
//         <p><strong>Last Login:</strong> {new Date(profileData.last_login).toLocaleString()}</p>
//       </div>
//       <div className="profile-actions">
//         <button onClick={goToDashboard} className="btn-dashboard">Back to Dashboard</button>
//         <button onClick={handleLogout} className="btn-logout">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Profile2;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile2 = () => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/auth/profile/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setProfileData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch profile data');
      console.error(err); // Log the error for debugging
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Format last login date with a check for null or undefined
  const formattedLastLogin = profileData.last_login
    ? new Date(profileData.last_login).toLocaleString()
    : 'Never'; // Or any other placeholder if last_login is not available

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {profileData.username}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Date Joined:</strong> {new Date(profileData.date_joined).toLocaleDateString()}</p>
        <p><strong>Last Login:</strong> {formattedLastLogin}</p>
      </div>
      <div className="profile-actions">
        <button onClick={goToDashboard} className="btn-dashboard">Back to Dashboard</button>
        <button onClick={handleLogout} className="btn-logout">Logout</button>
      </div>
    </div>
  );
};

export default Profile2;
